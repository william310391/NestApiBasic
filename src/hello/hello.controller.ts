import { Controller, Get, HttpCode, Param, ParseBoolPipe, ParseIntPipe, Query, Req, Res, UseGuards } from '@nestjs/common';
import { HelloService } from './hello.service';
import { Request, Response } from 'express';
import { ValidateUserPipe } from './pipes/validate-user/validate-user.pipe';
import { AuthGuard } from './guards/auth/auth.guard';

@Controller()
export class HelloController {
  constructor(private readonly helloService: HelloService) {}

  @Get('/hello')
  index(@Req() request: Request, @Res() response: Response) {
    console.log(request.url);
    response.status(200).json({
      message: 'Hello Wordl',
    });
  }

  @Get('/notfound')
  @HttpCode(404)
  notFoundPage() {
    return '404 not found';
  }

  @Get('/error')
  errorPage() {
    return 'error router';
  }

  @Get('ticket/:num')
  getNumber(@Param('num', ParseIntPipe) num: number) {
    return num + 14;
  }

  @Get('active/:status')
  isUserActive(@Param('status', ParseBoolPipe) status: boolean) {
    return status;
  }

  @Get('/greet')
  @UseGuards(AuthGuard)
  greet(@Query(ValidateUserPipe) query:{name:string, age:number}){
    console.log(typeof query.age)
    console.log(typeof query.name)
    return `Hello ${query.name}, you are ${query.age} years old`;   

  }

}
