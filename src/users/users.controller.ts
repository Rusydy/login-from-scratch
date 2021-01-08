import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './interfaces/user.interface';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  
  constructor(private usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto){
    return this.usersService.create(createUserDto)
  }

  @Get()
  async findAll(): Promise<User[]>{
    return this.usersService.findAll()
  }
}