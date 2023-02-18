import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Item, ItemDocument } from './schemas/items.shema';

@Injectable()
export class ItemsService {
    constructor(@InjectModel(Item.name) private readonly model: Model<ItemDocument>){}

    async addItem(newItem : Item){
        const item = await this.findItemByName(newItem.name)
        if(item){
            throw new BadRequestException({message: "Item with the same name already exists"})
        }

        return await new this.model(newItem).save()
    }

    async getAllItems() : Promise<Array<Item>> {
        return await this.model.find().exec()
    }

    async findItemById(_id : string) : Promise<Item> {
        const item = await this.model.findById(_id).exec()

        if(!item){ 
            throw new BadRequestException({message: "This item doesn't exist"})
        }
        return item
    }

    async findItemByName(name : string) : Promise<Item> {
        return await this.model.findOne({name}).exec()
    }

    async editItem(_id : string, updatedItem: Item) : Promise<Item> {
        return await this.model.findByIdAndUpdate(_id,updatedItem,{new: true})
    }

    async deleteItem(_id: string){
        return await this.model.findByIdAndDelete(_id)
    }
}
