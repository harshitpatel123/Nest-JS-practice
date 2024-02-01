import { Body, ClassSerializerInterceptor, Controller, Delete, Get, HttpStatus, Param, ParseIntPipe, Patch, Post, Req, Res, UploadedFile, UseInterceptors } from "@nestjs/common";
import { Request, Response, json } from "express";
import { userservice } from "./user.service";
import { cretaeuserdto } from "./dto/create-user.dto";
import { updateuserdto } from "./dto/update-user.dto";
import { FileInterceptor } from "@nestjs/platform-express";
import { ApiBody, ApiConsumes } from "@nestjs/swagger";
import { FileUploadDto } from "./dto/fileupload.dto";

@Controller('/user')
export class usercontroller {
    constructor(private userservice: userservice) { }

    @UseInterceptors(ClassSerializerInterceptor) // this will remove password in response 
    @Get()
    get() {
        return this.userservice.getuser();
    }

    // @UseInterceptors(ClassSerializerInterceptor)
    // @Get()
    // get():cretaeuserdto{
    //     return new cretaeuserdto({
    //         name: 'Kamil',
    //         email: 'Mysliwiec@kk.com',
    //         password: 'password',
    //       });
    // }

    @Post()
    store(@Body() createuserdto: cretaeuserdto) {
        return this.userservice.createuser(createuserdto);
    }

    @Get('/:userid')
    getone(@Param('userid', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) userid: number) {
        return this.userservice.getoneuser(userid);
    }

    @Delete('/:userid')
    deleteone(@Param('userid', ParseIntPipe) userid: number) {
        return this.userservice.deleteoneuser(userid);
    }

    @Patch('/:userid')
    updateone(@Param('userid', ParseIntPipe) userid: number, @Body() updateuserdto: updateuserdto) {
        return this.userservice.updateoneuser(userid, updateuserdto)
    }



    // @Get()
    // getusername(){
    //     return this.userservice.getname();
    // }
    // @Post('id/:userid')
    // setuserid(@Param('userid' , ParseIntPipe) userid: number){
    //     return `welcome ${userid}`
    // }
    // @Post()
    // showuserdetail(@Body() showuser:cretaeuserdto){
    //     return showuser;
    // }
    @Get('seecookie')
    setusername(@Req() req: Request, @Res({ passthrough: true }) response: Response) {
        console.log(req.cookies)
        response.cookie('webname', 'www.youAreGood.com')
        return `username set to ${req.body.name}`
    }

    @Post('upload')
    @UseInterceptors(FileInterceptor('file'))
    @ApiConsumes('multipart/form-data')
    @ApiBody({
        description: 'List of cats',
        type: FileUploadDto,
    })
    uploadFile(@UploadedFile() file: Express.Multer.File) {
        console.log("uploaded file : ", file);
        return { message : 'file uploaded' }
    }


}