import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTouristGroupDTO } from './dto/create_tourist_group.dto';

@Injectable()
export class TouristGroupService {
    constructor(private prismaService: PrismaService) { }

    async createTouristGroup(data: CreateTouristGroupDTO) {
  
      return this.prismaService.tourist_group.create({data})
    }
  
    async findTouristGroupById(id_tourist_group: number){
      return this.prismaService.tourist_group.findUnique({where: {id_tourist_group}});
    }
  
    async findTouristGroups(){
      return this.prismaService.tourist_group.findMany();
    }
  
    async deleteTouristGroupById(id_tourist_group){
      return this.prismaService.tourist_group.delete({where: {id_tourist_group}});
    }
  
    async updateTouristGroupById(id_tourist_group:number, data: CreateTouristGroupDTO){
      const findTouristGroup = await this.findTouristGroupById(id_tourist_group);
      if(!findTouristGroup) throw new HttpException('Tourist Group Not Found', 404);
        return this.prismaService.tourist_group.update({where: {id_tourist_group}, data})
      
    }
  }
  
