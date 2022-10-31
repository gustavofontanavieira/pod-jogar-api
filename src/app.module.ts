import { Module } from '@nestjs/common';
import { PodcastModule } from './modules/podcast.module';
import { UserModule } from './modules/user.module';

@Module({
  imports: [UserModule, PodcastModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
