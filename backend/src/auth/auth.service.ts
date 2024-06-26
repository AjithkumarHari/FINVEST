import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/models/userSchema';
import { Model } from 'mongoose';
import { CredentialsAuthDto } from './dto/credentials-auth.dto';
import * as bcrypt from 'bcryptjs';
import  * as jwt from 'jsonwebtoken';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {



  constructor(@InjectModel(User.name) private userModel: Model<User>, private configService: ConfigService){}

  async register(createAuthDto: CreateAuthDto) {
    const existingUser: User | null = await this.userModel.findOne({email: createAuthDto.email});
    if(existingUser)
      throw new HttpException('User already exists!',HttpStatus.CONFLICT);
    const salt = await bcrypt.genSalt(10);
    createAuthDto.password = await bcrypt.hash(createAuthDto.password, salt);
    const newUser = new this.userModel(createAuthDto);
    newUser.save();
    const { id,name,email }= newUser;
    const jwtSecretKey = this.configService.get<string>('JWT_SECRET_KEY');
    const token = jwt.sign({id},jwtSecretKey,{expiresIn:"1d"})
    return { response:"success",statusCode:HttpStatus.CREATED, message:"New user created",userData:{ id,name,email },userToken: token }
  }

  async login(credentialsAuthDto: CredentialsAuthDto) {
    const existingUser = await this.userModel.findOne({email: credentialsAuthDto.email});
    if(!existingUser){
      throw new HttpException('User does not exists!',HttpStatus.UNAUTHORIZED);
    }
    else{
      const { id,name,email,password } = existingUser;
      const comparePasswords = await bcrypt.compare(credentialsAuthDto.password,password);
      if(!comparePasswords)
        throw new HttpException('Password does not match!',HttpStatus.UNAUTHORIZED);
      const jwtSecretKey = this.configService.get<string>('JWT_SECRET_KEY');
      const token = jwt.sign({id},jwtSecretKey,{expiresIn:"1d"})
      return { response:"success",statusCode:HttpStatus.OK, message:"User login succcess",userData:{ id,name,email },userToken: token };
    }
  }

  async findUserByEmail(email: string): Promise<User>{
    return await this.userModel.findOne({email});;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
