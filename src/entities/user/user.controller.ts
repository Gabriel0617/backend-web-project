import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { UserPipe } from './user.pipe';
import { CreateUserDTO } from './dto/create_user.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { RolesGuard } from 'src/auth/roles/roles.guard';
import { Roles } from 'src/auth/roles/roles.decorator';

@Controller('user')
export class UserController {
    constructor(private userService : UserService){}
    
    @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
    @Post()
    createUser(@Body(new UserPipe()) data : CreateUserDTO){
   
    return this.userService.createUser(data);
  }
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @Delete(':id')
    deleteUserById(@Param('id', ParseIntPipe) user_id : number){
   
    return this.userService.deleteUserById(user_id);
  }
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @Get()
  
  getAllUsers(){
    return this.userService.findUsers();
  }
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  getUserById(@Param('id', ParseIntPipe) id_user: number){
    return this.userService.findUserById(id_user);
  }
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @Patch(':id')
  updateUserById(@Param('id', ParseIntPipe)id_user: number,@Body() data: CreateUserDTO){
    this.userService.editUserById(id_user, data)
  }
}
