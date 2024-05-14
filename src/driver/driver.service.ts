import { Injectable, NotFoundException } from '@nestjs/common';

import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDriverDTO, CreatePermanentDriverDTO, CreateReserverDriverDTO } from './dto/create_driver.dto';




@Injectable()
export class DriverService {
  constructor(private prismaService: PrismaService) { }

  async createDriver(data: CreateDriverDTO) {
    return this.prismaService.driver.create({
      data
    })
  }

  async createPermanentDriver(data: CreatePermanentDriverDTO) {
    const { id_car, ...driverData } = data;
    const new_driver = await this.createDriver(driverData);

    return this.prismaService.permanent_driver.create({
      data: {
        id_driver: new_driver.id_driver,
        id_car

      }
    })
  }

  async createReserverDriver(data: CreateReserverDriverDTO) {
    const { id_brand, ...driverData } = data;
    const new_driver = await this.createDriver(driverData);

    return this.prismaService.reserver_driver.create({
      data: {
        id_driver: new_driver.id_driver,
        id_brand

      }
    })
  }

}
