import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { RoleService } from './role.service';
import { RolePipe } from './role.pipe';
import { CreateRoleDTO } from './dto/create_role.dto';

@Controller('role')
export class RoleController {
    
    constructor(private roleService : RoleService){}

    @Post()
    createRole(@Body(new RolePipe) data: CreateRoleDTO){
        return this.roleService.createRole(data);
    }

    @Get()
    getAllRoles(){
      return this.roleService.findRoles();
    }
  
    @Get(':id')
    getRoleById(@Param('id', ParseIntPipe) id_role: number){
      return this.roleService.findRoleById(id_role);
    }

}
