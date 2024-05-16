import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateRoleDTO } from './dto/create_role.dto';

@Injectable()
export class RoleService {
    constructor(private prismaService: PrismaService) { }

    async createRole(data: CreateRoleDTO){
        this.prismaService.role.create({data});
    }

    async findRoles(){
        this.prismaService.role.findMany();
    }

    async findRoleById(id_role : number){
        this.prismaService.role.findUnique({where: {id_role}});
    }
}
