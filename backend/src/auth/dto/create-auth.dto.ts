import { IsEmail, IsString, Length, MinLength } from "class-validator";

export class CreateAuthDto {

    @IsString()
    @MinLength(3,{message:"enter correct name!"})
    name: string

    @IsEmail()
    email: string

    @IsString()
    @Length(3,3)	
    password: string

}
