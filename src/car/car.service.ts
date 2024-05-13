import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCarDTO } from './dto/create_car.dto';

@Injectable()
export class CarService {

  constructor(private prismaService: PrismaService) { }

  async createCar(data: CreateCarDTO) {

    return this.prismaService.car.create({
      data
    })
  }

  // async findCarById(carId: number){
  //   return this.prismaService.car.findUnique();
  // }
}

