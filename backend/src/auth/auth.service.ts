import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/models/userSchema';
import { Model } from 'mongoose';

@Injectable()
export class AuthService {

  constructor(@InjectModel(User.name) private userModel: Model<User>){}

  register(createAuthDto: CreateAuthDto) {
    const newUser = new this.userModel(createAuthDto);
    return newUser.save();
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
