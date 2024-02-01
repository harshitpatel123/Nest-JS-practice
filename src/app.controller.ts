import { Body, Controller, Get, Post, Redirect, Render, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
 
  @Get()
  async  getHello(): Promise<string> {   
    console.log("env database name : ",process.env.DATABASE_NAME)
    return this.appService.getHello();
  }

  // @Get()
  // @Render('index')
  // root() {
  //   return { message: 'Hello Harshit!' };
  // }
 

  @Redirect('/')
  @Get('bye')
  getbye() {
    // return {url : 'hyy'}
    return 'bye bye ...'
  }
  @Get('hyy')
  gethyy(): string {
    return 'hello there ...'
  }
  @Post('add')
  addData(): string{
    return 'data is added successfully'
  }
  @Post()
  testFunc(@Req() req:Request){
    console.log(req.body)
    return req.body
  }
  @Post('body')
  bodyfunc(@Body() body){
    console.log(body.name)
    return body
  }
}
