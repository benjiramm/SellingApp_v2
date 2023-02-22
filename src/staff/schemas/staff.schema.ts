import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, Length } from "class-validator";
import { Types } from "mongoose";

export type StaffDocument = Staff & Document

@Schema()
export class Staff {
    @Prop({required: true, unique:true})
    @Length(2, 20, {message: "name should range from 2 to 20 charachters"})
    @IsString({message: "must be string"})
    @ApiProperty({example: "Rut", description: "name of staff member"})
    name: string;

    _id: Types.ObjectId;
}

export const StaffSchema = SchemaFactory.createForClass(Staff) 