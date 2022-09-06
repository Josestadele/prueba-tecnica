import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostModule } from './post/post.module';
import { ScheduleModule } from '@nestjs/schedule';



@Module({
  imports: [ScheduleModule.forRoot(),MongooseModule.forRoot('mongodb://localhost/prueba-tecnica'), PostModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
