import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { PodcastController } from 'src/controllers/podcasts.controller';
import { PodcastService } from 'src/services/podcast.service';

@Module({
  controllers: [PodcastController],
  providers: [PodcastService, PrismaService],
})
export class PodcastModule {}
