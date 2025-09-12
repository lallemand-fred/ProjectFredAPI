import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { AppService } from './app.service';
import { create } from 'node:domain';
import { ApiOperation, ApiOperationOptions, ApiTags } from '@nestjs/swagger';
import { AppControllerHelloWorld } from './app.swagger';

@ApiTags('Route de base')
@Controller( 'main')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiOperation(AppControllerHelloWorld)
  @Get('hello-world')
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

  @Patch()
  patchOnValue(name:string):void{

  }


  @Put()
  update(name:string,firstname:string): void{

  }

  @Delete()
  delete(@Param('id') id: string):void{

  }
}
