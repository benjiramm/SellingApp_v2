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

    async getAllStaff(): Promise<Array<Staff>> {
        return await this.model.find().exec()
    }

    async findStaffById(_id: string): Promise<Staff> {
        const staff = await this.model.findOne({_id}).exec()
        if(!staff) {
            throw new BadRequestException({message: "This staff doesn't exist"})
        }
        return staff
    }

    async findStaffByName(name: string): Promise<Staff>{
        return await this.model.findOne({name}).exec()
    }

    async editStaff(_id: string, updatedStaff: Staff): Promise<Staff> {
        return await this.model.findByIdAndUpdate(_id, updatedStaff, {new: true})
    }

    async deleteStaff(_id: string) {
        return await this.model.findByIdAndDelete(_id)
    }
}
