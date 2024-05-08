import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { createUserDto } from './dto/create-user.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @ApiOperation({ summary: 'xxxxx xxxxxxx' })
  getUsers() {
    return this.usersService.getUsers();
  }
  @Post()
  @ApiOperation({ summary: 'yyyyy yyyyyyy' })
  createUser(@Body() user: createUserDto) {
    return this.usersService.createUser(user);
  }
}
