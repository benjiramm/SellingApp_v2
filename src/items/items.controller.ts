import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ItemsService } from './items.service';
import { Item } from './schemas/item.shema';

@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService : ItemsService){}

    @Post()
    @ApiOperation({summary: "Add a new item"})
    @ApiResponse({status: 201, type:Item})
    addItem(@Body() newItem: Item) {
        return this.itemsService.addItem(newItem)
    }

    @Get()
    @ApiOperation({summary: "Get all items"})
    @ApiResponse({status: 200, type:[Item]})
    getAllItems(){
        return this.itemsService.getAllItems()
    }

    @Get(':id')
    @ApiOperation({summary: "Get item by id"})
    @ApiResponse({status: 200, type:Item})
    getItemById(@Param("id") id: string){
        return this.itemsService.findItemById(id)
    }

    @Put(':id')
    @ApiOperation({summary: "Edit an item by id"})
    @ApiResponse({status: 200, type:Item})
    editItem(@Param("id") id: string, @Body() item: Item){
        return this.itemsService.editItem(id, item)
    }

    @Delete(':id')
    @ApiOperation({summary: "Edit an item by id"})
    @ApiResponse({status: 200, type:Item})
    deleteItem(@Param("id") id: string){
        return this.itemsService.deleteItem(id)
    }
}
