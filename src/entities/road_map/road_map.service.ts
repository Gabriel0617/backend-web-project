import { HttpException, Injectable } from '@nestjs/common';
import { createRoadMapDTO } from './dto/create_road_map.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RoadMapService {
    constructor(private prismaService: PrismaService) { }

    async createRoadMap(data: createRoadMapDTO) {
  
      return this.prismaService.road_map.create({
        data
      })
    }
  
    async findRoadMapById(id_road_map: number){
      return this.prismaService.road_map.findUnique({where: {id_road_map}});
    }
  
    async findRoadMaps(){
      return this.prismaService.road_map.findMany();
    }
  
    async deleteRoadMapById(id_road_map){
      return this.prismaService.road_map.delete({where: {id_road_map}});
    }
  
    async updateRoadMapById(id_road_map:number, data: createRoadMapDTO){
      const findRoadMap = await this.findRoadMapById(id_road_map);
      if(!findRoadMap) throw new HttpException('Road Map Not Found', 404);
        return this.prismaService.road_map.update({where: {id_road_map}, data})
      
    }

    async findAllRoadMapNumbers(){
      return this.prismaService.road_map.findMany({select: {road_map_number : true}});
    }

    async findRoadMapNumberById(id_road_map: number){
      return this.prismaService.road_map.findUnique({where: {id_road_map}, select : {road_map_number : true}});
    }

    async findRoadMapIdByNumber(road_map_number: string){
      return this.prismaService.road_map.findUnique({where: {road_map_number}, select : {id_road_map : true}});
    }

  }
