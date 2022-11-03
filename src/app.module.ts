import { Module } from '@nestjs/common';
import { PodcastController } from './controllers/podcasts.controller';
import { UserController } from './controllers/user.controller';
import { PrismaService } from './database/prisma.service';
import { PodcastModule } from './modules/podcast.module';
import { UserModule } from './modules/user.module';
import { PodcastService } from './services/podcast.service';
import { UserService } from './services/user.service';

@Module({
  imports: [UserModule, PodcastModule],
  controllers: [UserController, PodcastController],
  providers: [UserService, PodcastService, PrismaService],
})
export class AppModule {}
