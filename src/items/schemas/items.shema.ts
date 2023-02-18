import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString, Length } from "class-validator";
import { Types } from "mongoose";

export type ItemDocument = Item & Document

@Schema()
export class Item {
    @Prop({required:true, unique:true})
    @Length(2,30,{message: "name must be between 2 and 30 characters"})
    @IsString({message: "name must be string"})
    @ApiProperty({example: "Beer", description: "display name of the item for sale"})
    name: string;

    @Prop()
    @IsString({message: "name must be string"})
    @ApiProperty({example: "fa-beer-mug-empty", description: "name of the corresponding fontawesome icon"})
    icon_name: string;

    @Prop({required:true})
    @ApiProperty({example: 3, description: "how many points the item is worth in the morning"})
    value_morning: number;
    @Prop({required:true})
    @ApiProperty({example: 2, description: "how many points the item is worth in the evening"})
    value_evening: number;

    _id: Types.ObjectId;
}

export const ItemSchema = SchemaFactory.createForClass(Item)