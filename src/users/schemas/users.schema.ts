import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, Length } from "class-validator";
import { Types } from "mongoose";

export type UserDocument = User & Document

@Schema()
export class User { 
    @Length(3,30,{message: "length must be between 3 and 30 charachters"})
    @IsString({message: "must be a string"})
    @ApiProperty({example: "manager", description: "username"})
    @Prop({required:true, unique:true})
    username: string;

    @Length(6,30,{message: "length must be between 6 and 30 charachters"})
    @IsString({message: "must be a string"})
    @ApiProperty({example: "123456", description: "password"})
    @Prop({required:true})
    password: string;

    _id: Types.ObjectId;
}

export const UserSchema = SchemaFactory.createForClass(User)