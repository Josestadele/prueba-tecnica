import {Document} from 'mongoose'

export interface Post extends Document {
     id:number,
    title:string,
    description: string,
    created:Date
}