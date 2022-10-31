import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PodcastService } from 'src/services/podcast.service';
import { PodcastDto } from '../dto/podcast.dto';

@Controller('podcast')
export class PodcastController {
  constructor(private readonly podcastService: PodcastService) {}

  @Post('create/:id')
  async create(@Body() data: PodcastDto, @Param('id') id: string) {
    return await this.podcastService.create(data, id);
  }

  @Get('userPodcasts/:id')
  async getAllUserPodcasts(@Param('id') id: string) {
    return await this.podcastService.getAllPodcastsFromUser(id);
  }

  @Get('getAll/:id')
  async getAll(@Param('id') id: string) {
    return await this.podcastService.getAll(id);
  }

  @Delete('delete/:id')
  async delete(@Param('id') id: string) {
    return await this.podcastService.delete(id);
  }

  @Put('update/:id')
  async update(@Param('id') id: string, @Body() data: PodcastDto) {
    return await this.podcastService.update(data, id);
  }
}
