import { IsEmail, Length, MinLength } from "class-validator";

export class CreateUserDto {
    @MinLength(3)
    name: string;

    @IsEmail()
    email: string;

    @Length(8)
    password: string;


}
