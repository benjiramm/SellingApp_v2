import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiHeaders, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { User } from './schemas/users.schema';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService){}

    @Post()
    @ApiOperation({summary: "Add new user"})
    @ApiResponse({status: 201, type: User})
    addUser(@Body() newUser: User){
        return this.usersService.addUser(newUser)
    }

}
