import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { RolePipe } from './role.pipe';
import { RoleService } from './role.service';
import { CreateRoleDTO } from './dto/create_role.dto';

@Controller('role')
export class RoleController {
    constructor(
        private roleService: RoleService
      ) { }

      @Post()
  createRole(@Body(new RolePipe()) data: CreateRoleDTO){
   
    
    return this.roleService.createRole(data)
  }

  @Get()
  getAllRoles(){
    return this.roleService.findRoles();
  }

  @Get(':id')
  getRoleById(@Param('id', ParseIntPipe)id_role:number){
    return this.roleService.findRoleById(id_role);
  }

 

  @Delete(':id')
  deleteRoleById(@Param('id', ParseIntPipe)id_role:number){
    return this.roleService.deleteRoleById(id_role);
  }

  @Patch(':id')
  updateCarById(@Param('id', ParseIntPipe)id_role: number,@Body() data: CreateRoleDTO){
    this.roleService.updateRoleById(id_role, data)
  }

}
