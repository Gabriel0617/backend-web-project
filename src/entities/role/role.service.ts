import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateRoleDTO } from './dto/create_role.dto';

@Injectable()
export class RoleService {
    constructor(private prismaService: PrismaService) { }

    async createRole(data: CreateRoleDTO) {
  
      return this.prismaService.role.create({data})
    }
  
    async findRoleById(id_role: number){
      return this.prismaService.role.findUnique({where: {id_role}});
    }
  
    async findRoles(){
      return this.prismaService.role.findMany();
    }
  
    async deleteRoleById(id_role){
      return this.prismaService.role.delete({where: {id_role}});
    }
  
    async updateRoleById(id_role:number, data: CreateRoleDTO){
      const findRole = await this.findRoleById(id_role);
      if(!findRole) throw new HttpException('Role Not Found', 404);
        return this.prismaService.role.update({where: {id_role}, data})
      
    }
}
