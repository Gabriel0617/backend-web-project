import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBusBrandDTO } from './dto/create_bus_brand.dto';
import { async } from 'rxjs';

@Injectable()
export class BusBrandService {
  constructor(private prismaService: PrismaService) { }

  async createBusBrand(data: CreateBusBrandDTO) {

    return this.prismaService.bus_brand.create({
      data: {
        chairs_count: data.chairs_count,
        fuel_type: data.fuel_type,
        brand_cars: {},
        fuel_consumption: data.fuel_consumption,
        reserve_drivers: {}
      }
    })
  }


  async findAll(){
    return this.prismaService.bus_brand.findMany(); // Utiliza el método find() del repositorio para obtener todas las marcas de autobuses
  }

}
