import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateRequestDTO } from './dto/create_request.dto';

@Injectable()
export class RequestService {
    constructor(private prismaService: PrismaService) { }

    async createRequest(data: CreateRequestDTO) {
  
      return this.prismaService.request.create({data})
    }
  
    async findRequestById(id_request: number){
      return this.prismaService.request.findUnique({where: {id_request}});
    }
  
    async findRequests(){
      return this.prismaService.request.findMany();
    }
  
    async deleteRequestById(id_request){
      return this.prismaService.request.delete({where: {id_request}});
    }
  
    async updateRequestById(id_request:number, data: CreateRequestDTO){
      const findRequest = await this.findRequestById(id_request);
      if(!findRequest) throw new HttpException('Request Not Found', 404);
        return this.prismaService.request.update({where: {id_request}, data})
    }
}
