import { Get,Delete,Post ,Body, Controller, Param } from '@nestjs/common';
import { PostDTO } from './dto/post.dto';
import { PostService } from './post.service';
import { Post as POST } from './schema/objeto.schema';


@Controller('post')
export class PostController {
    constructor(private readonly postService:PostService){}

    @Post()
    async create(@Body() createPost:PostDTO){
       await this.postService.create(createPost); 
    }

    @Get()
    async findAll():Promise<POST[]>{
        return this.postService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id :string): Promise<POST>{
        return this.postService.findOne(id) ;
    }

    @Delete('id')
    async delete(@Param('id') id:string){
        return this.postService.delete(id);
    }


}
