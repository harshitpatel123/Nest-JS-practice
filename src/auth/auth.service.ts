import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { userservice } from 'src/user/user.service';

@Injectable()
export class AuthService {
    constructor(
        private userservice:userservice,
        private jwtservice:JwtService
        ){}

    async validateuser(email:string, password:string){
        if(email){
            const checkuser = await this.userservice.finduserbyemail(email);
            if(checkuser){
                if(checkuser.password === password){
                    return checkuser
                }
                return "password doesn't match"
            }
        }
        return 'user not found'
    }

    async login(user:any){
        const payload = { email : user.email , sub : user.id}
        return {
            access_token : this.jwtservice.sign(payload)
        }
    }
}
