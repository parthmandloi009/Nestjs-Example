import { Body, Controller, Get, Post, UseFilters, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { mainDto } from './core/mainDto';
import { HttpExceptionFilter } from './filter/exception.filter';
import { RolesGuard } from './guards/user.guards';

@Controller()
//@UseGuards(RolesGuard)

export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  postHello(@Body() data:mainDto): string {
    return this.appService.getHello();
  }
}
