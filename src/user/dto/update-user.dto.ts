import { IsEmail, IsNumber, IsString, isEmail, isNumber, isString } from "class-validator";

export class updateuserdto{
    @IsString()
    name : string;  

    @IsEmail()
    email : string;

    @IsString()
    password : string;
}