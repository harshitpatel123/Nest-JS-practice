import { Body, Controller, Post, UseInterceptors } from '@nestjs/common';
import { userservice } from 'src/user/user.service';
import { AuthService } from './auth.service';
import { LoggingInterceptor } from 'src/interceptor/logging.interceptor';


@Controller('auth')
export class AuthController {
    constructor(private authservice:AuthService){}


    @Post('/login')
    async login(@Body() logindto:any){
        return this.authservice.validateuser(logindto.email,logindto.password)
    }
    @Post('/token')
    async token(@Body() logindto:any){
        return this.authservice.login(logindto)
    }
}
