import { IsEmail, IsString, Length, MinLength } from "class-validator";

export class CreateAuthDto {

    @IsString()
    @MinLength(3)
    name: string

    @IsEmail()
    email: string

    @IsString()
    @Length(9,9,{message:"password must have 9 characters"})	
    password: string

}
