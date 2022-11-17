import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { PodcastController } from 'src/controllers/podcasts.controller';
import { PodcastService } from 'src/services/podcast.service';
import { CategoriesService } from 'src/services/categories.service';

@Module({
  controllers: [PodcastController],
  providers: [PodcastService, PrismaService, CategoriesService],
})
export class PodcastModule {}
