import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { create } from 'node:domain';

@Controller( 'main')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('get-hello2')
  getHello2(): string {
    return this.appService.getHello();
  }
  @Post()
  create():void{

  }

  @Put()
  update(): void{

  }

  @Delete()
  delete(@Param('id') id: string):void{

  }
}
