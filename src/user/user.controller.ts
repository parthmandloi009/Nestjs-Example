import { Body, Controller, Get, Post, UseFilters, UseGuards, UseInterceptors, ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from 'src/filter/exception.filter';
import { UserService } from './user.services';
import { UserDataDto } from './dto/UserDataDto';
import { RolesGuard } from 'src/guards/user.guards';
import { LoggingInterceptor } from 'src/interceptor/logger';
@Controller("user")
//@UseFilters(new HttpExceptionFilter)
@UseGuards(RolesGuard)
@UseInterceptors(LoggingInterceptor)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/')
  getUser(): string {
    return this.userService.getUser();
  }

  @Post()
  createUser(@Body(new ValidationPipe) createCatDto:UserDataDto){
       return this.userService.createUser(createCatDto);
  }
}
