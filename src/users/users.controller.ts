import { Body, Controller, Post } from '@nestjs/common';
import { User } from './schemas/users.schema';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService){}

    @Post()
    addUser(@Body() newUser: User){
        return this.usersService.addUser(newUser)
    }
}
