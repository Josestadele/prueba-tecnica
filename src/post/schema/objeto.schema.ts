import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type postDocument= Post & Document

@Schema()
export class Post {
    @Prop()
    id:Number;

    @Prop()
    title:String;

    @Prop()
    description: String;

}

export const PostShema= SchemaFactory.createForClass(Post);

