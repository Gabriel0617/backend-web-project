import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateServicePerformedDTO } from './dto/create_service_performed.dto';

@Injectable()
export class ServicePerformedService {
    constructor(private prismaService: PrismaService) { }

    async createServicePerformed(data: CreateServicePerformedDTO) {
  
      return this.prismaService.service_performed.create({data})
    }
  
    async findServicePerformedById(id_service_performed: number){
      return this.prismaService.service_performed.findUnique({where: {id_service_performed}});
    }
  
    async findServicesPerformed(){
      return this.prismaService.service_performed.findMany();
    }
  
    async deleteServicePerformedById(id_service_performed){
      return this.prismaService.service_performed.delete({where: {id_service_performed}});
    }
  
    async updateServicePerformedById(id_service_performed:number, data: CreateServicePerformedDTO){
      const find_service_performed = await this.findServicePerformedById(id_service_performed);
      if(!find_service_performed) throw new HttpException('Service Performed Not Found', 404);
        return this.prismaService.service_performed.update({where: {id_service_performed}, data})
      
    }
}
