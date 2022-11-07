import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UploadedFile, UseInterceptors } from '@nestjs/common/decorators';
import { FileInterceptor } from '@nestjs/platform-express';
import { PodcastService } from 'src/services/podcast.service';
import { PodcastDto } from '../dto/podcast.dto';

import { ref, uploadBytes, getDownloadURL, getStorage } from 'firebase/storage';
import app from '../firebase/firebase.config';
const storage = getStorage(app);

@Controller('podcast')
export class PodcastController {
  constructor(private readonly podcastService: PodcastService) {}

  @Post('create/:id')
  @UseInterceptors(FileInterceptor('file'))
  async create(
    @Body() data: PodcastDto,
    @Param('id') id: string,
    @UploadedFile() file: Express.Multer.File,
  ) {
    const fileRef = ref(storage, file.originalname);
    await uploadBytes(fileRef, file.buffer).then(() => {});
    await getDownloadURL(fileRef)
      .then((url) => {
        data.file = url;
      })
      .catch((error) => {
        return error.message;
      });

    return await this.podcastService.create(data, id);
  }

  /* 
     @Post('create/:id')
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'file', maxCount: 1 },
      { name: 'image', maxCount: 1 },
    ]),
  )
  async create(
    @Body() data: PodcastDto,
    @Param('id') id: string,
    @UploadedFiles()
    files: { file?: Express.Multer.File[]; image?: Express.Multer.File[] },
  ) {
    const fileRef = ref(storage, files.file[0].originalname);
    await uploadBytes(fileRef, files.file[0].buffer).then(() => {});
    await getDownloadURL(fileRef)
      .then((url) => {
        data.file = url;
      })
      .catch((error) => {
        return error.message;
      });

    const imageRef = ref(storage, files.image[0].originalname);
    await uploadBytes(imageRef, files.image[0].buffer).then(() => {});
    await getDownloadURL(imageRef)
      .then((url) => {
        data.image = url;
      })
      .catch((error) => {
        return error.message;
      });

    return await this.podcastService.create(data, id);
  }
  */

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
