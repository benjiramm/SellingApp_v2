import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Staff } from './schemas/staff.schema';
import { StaffService } from './staff.service';


@Controller('staff')
export class StaffController {
    constructor(private readonly staffService:  StaffService){}

    @Post()
    @ApiOperation({summary: "Add a new staff member"})
    @ApiResponse({status: 201, type:Staff})
    addUser(@Body() newStaff:Staff){
        return this.staffService.addStaff(newStaff)
    }

    @Get()
    @ApiOperation({summary: "Get all staff members"})
    @ApiResponse({status: 200, type:[Staff]})
    getAllStaff() {
        return this.staffService.getAllStaff()
    }

    @Get(":id")
    @ApiOperation({summary: "Find staff member by id"})
    @ApiResponse({status: 200, type:Staff})
    findStaffById(@Param('id') id:string) {
        return this.staffService.findStaffById(id)
    }

    @Put(":id")
    @ApiOperation({summary: "Edit a staff member by id"})
    @ApiResponse({status: 200, type:Staff})
    editStaff(@Param('id') id: string, @Body() updatedStaff:Staff){
        return this.staffService.editStaff(id,updatedStaff)
    }

    @Delete(":id")
    @ApiOperation({summary: "Delete a staff member by id"})
    @ApiResponse({status: 200, type:Staff})
    deleteStaff(@Param('id') id: string){
        return this.staffService.deleteStaff(id)
    }
}
