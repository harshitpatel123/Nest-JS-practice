import { Exclude } from "class-transformer";
import { IsEmail, IsNumber, IsString, isEmail, isNumber, isString } from "class-validator";

export class cretaeuserdto{
    @IsString()
    name : string;  

    @IsEmail()
    email : string;

    @Exclude()
    @IsString()
    password : string;

    constructor(partial: Partial<cretaeuserdto>) {
        Object.assign(this, partial);
      }
}