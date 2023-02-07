import { Body, Controller, Get, Post } from '@nestjs/common';
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
}
