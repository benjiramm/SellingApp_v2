import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Staff, StaffDocument } from './schemas/staff.schema';

@Injectable()
export class StaffService {
    constructor(@InjectModel(Staff.name)  private readonly model: Model<StaffDocument>){}

    async addStaff(newStaff : Staff) {
        const staff = await this.findStaffByName(newStaff.name)
        if(staff){
            throw new BadRequestException({message: "This name already taken"})
        }

        return await new this.model(newStaff).save()
    }

    async findStaffByName(name: string): Promise<Staff>{
        return await this.model.findOne({name}).exec()
    }
}
