import { IsEmail, IsString, Length} from "class-validator";

export class CredentialsAuthDto {

    @IsEmail()
    email: string

    @IsString()
    @Length(9,9,{message:"password must have 9 characters"})	
    password: string

}
