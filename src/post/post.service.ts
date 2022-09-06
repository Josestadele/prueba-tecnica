import { Injectable ,Logger } from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {PostDTO} from './dto/post.dto'
import {postDocument,Post} from './schema/objeto.schema'

import { Cron,CronExpression } from '@nestjs/schedule';



@Injectable()
export class PostService {
    
    private readonly logger = new Logger(PostService.name);
    
    private data
    constructor(@InjectModel(Post.name) private readonly postModule: Model<postDocument> ){}



    async create(postDto:PostDTO):Promise<Post> {
        const createPost = this.guardainfo(postDto)
        return createPost;
    }

    @Cron(CronExpression.EVERY_10_SECONDS)
     async guardainfo(postDto:PostDTO) {
        if(postDto?.title){
            this.data= postDto
        }
        return await this.postModule.create(this.data);
    }


    async findAll():Promise<Post[]>{
        return this.postModule.find().exec();
    }

    async findOne(id:string):Promise<Post>{
        return this.postModule.findOne({_id:id})
    }

    async delete(id:string){
        const deletePost= await this.postModule.findByIdAndRemove({_id:id}).exec();
        return deletePost;
    }
}
