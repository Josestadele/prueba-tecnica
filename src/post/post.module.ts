import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import {MongooseModule} from '@nestjs/mongoose'
import {Post,PostShema} from './schema/objeto.schema'

@Module({
  imports:[ MongooseModule.forFeature([{name:Post.name, schema:PostShema}])],
  controllers: [PostController],
  providers: [PostService,]
})
export class PostModule {}
