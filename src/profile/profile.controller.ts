import { Body, Controller, Get, Post, Req, Request, UseInterceptors } from '@nestjs/common';
import { User } from 'src/decorators/user.decorator';
import { LoggingInterceptor } from 'src/interceptor/logging.interceptor';
import { TimeoutInterceptor } from 'src/interceptor/timeout.interceptor';
import { TransformInterceptor } from 'src/interceptor/transform.interceptor';
import { user } from 'src/user/entity/user.entity';

@UseInterceptors(LoggingInterceptor)
@UseInterceptors(TransformInterceptor)
// @UseInterceptors(TimeoutInterceptor)
@Controller('profile')
export class ProfileController {
    @Get()
    profile(){
        return {mssage: 'i am profile'}
    }

    @Post()
    async getprofile(@Body() logindto:any,@Request() req,@User('name') name:string){
        // console.log(req)
        console.log(name)
        return logindto.name;
    }

    // @Post()
    // async getprofile(@Body() logindto:any){
    //     const result = await new Promise(resolve => {
    //         setTimeout(() => {
    //             console.log("lll");
    //             resolve(logindto.name);
    //         }, 3000);
    //     });

    //     return result;
    // }
}
