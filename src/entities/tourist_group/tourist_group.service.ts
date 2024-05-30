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

    async findAllTouristGroupNumbers(){
      return this.prismaService.tourist_group.findMany({select :{group_number : true} });
    }

    async findTouristGroupNumberById(id_tourist_group : number){
      return this.prismaService.tourist_group.findUnique({where : {id_tourist_group} ,select :{group_number : true} });
    }

    async findTouristGroupIdByNumber(group_number : number){
      return this.prismaService.tourist_group.findUnique({where: {group_number}, select :{id_tourist_group : true} });
    }

    async findTopThreeTouristGroupCountries(){
      const tourist_groups = await this.prismaService.tourist_group.findMany();

      const countries = tourist_groups.map(group => group.group_country)

      let countries_counter = new Map<string, number>();

      for(const country of countries){
        if(!countries_counter.has(country)){
          countries_counter.set(country, 1)
        }else{
          countries_counter.set(country, countries_counter.get(country)+1)
        }
      }

      let countriesArray = Array.from(countries_counter.entries());

      countriesArray.sort((a, b) => b[1] - a[1]);

      const topCountriesArray = countriesArray.slice(0,3);

      let topCountries = topCountriesArray.map(entry => entry[0]);

      return topCountries;
    }
  }
  

