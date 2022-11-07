import { Module } from '@nestjs/common';
import { CategoriesController } from './controllers/categories.controller';
import { PodcastController } from './controllers/podcasts.controller';
import { UserController } from './controllers/user.controller';
import { PrismaService } from './database/prisma.service';
import { CategoriesModule } from './modules/categories.module';
import { PodcastModule } from './modules/podcast.module';
import { UserModule } from './modules/user.module';
import { CategoriesService } from './services/categories.service';
import { PodcastService } from './services/podcast.service';
import { UserService } from './services/user.service';

@Module({
  imports: [UserModule, PodcastModule, CategoriesModule],
  controllers: [UserController, PodcastController, CategoriesController],
  providers: [UserService, PodcastService, CategoriesService, PrismaService],
})
export class AppModule {}
