import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from '../services/user.service';
import { UserDto } from '../dto/user.dto';
import { LoginDto } from 'src/dto/login.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  async create(@Body() data: UserDto) {
    return await this.userService.create(data);
  }

  @Put('updateById/:id')
  async update(@Param('id') id: string, @Body() data: UserDto) {
    return await this.userService.update(data, id);
  }

  @Get('getUserById/:id')
  async getUserById(@Param('id') id: string) {
    return await this.userService.getById(id);
  }

  @Get('getAllUsers')
  async getAllUsers() {
    return await this.userService.getAllUsers();
  }

  @Delete('deleteUserById/:id')
  async deleteUserById(@Param('id') id: string) {
    return await this.userService.deleteUser(id);
  }

  @Post('login')
  async login(@Body() data: LoginDto) {
    return await this.userService.login(data);
  }

  @Post('favorite/:userId/:podcastId')
  async favorite(
    @Param('userId') userId: string,
    @Param('podcastId') podcastId: string,
  ) {
    return await this.userService.favoritePodcast(userId, podcastId);
  }

  @Delete('disfavor/:userId/:favoriteId')
  async disfavor(
    @Param('userId') userId: string,
    @Param('favoriteId') favoriteId: string,
  ) {
    return await this.userService.disfavorPodcast(favoriteId, userId);
  }
}
