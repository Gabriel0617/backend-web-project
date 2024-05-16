import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserPipe } from './user.pipe';
import { CreateUserDTO } from './dto/create_user.dto';

@Controller('user')
export class UserController {
    constructor(private userService : UserService){}

    @Post()
    createUser(@Body(new UserPipe()) data : CreateUserDTO){
   
    return this.userService.createUser(data);
  }

  @Delete(':id')
    deleteUserById(@Param('id', ParseIntPipe) user_id : number){
   
    return this.userService.deleteUserById(user_id);
  }

  @Get()
  getAllUsers(){
    return this.userService.findUsers();
  }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id_user: number){
    return this.userService.findUserById(id_user);
  }

  @Patch(':id')
  updateUserById(@Param('id', ParseIntPipe)id_user: number,@Body() data: CreateUserDTO){
    this.userService.editUserById(id_user, data)
  }
}
