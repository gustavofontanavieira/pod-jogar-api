import { Body, Controller, Post } from '@nestjs/common';
import { create } from 'domain';
import { UserService } from '../services/user.service';
import { UserDto } from '../dto/user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  async create(@Body() data: UserDto) {
    return await this.userService.create(data);
  }
}
