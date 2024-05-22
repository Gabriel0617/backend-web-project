import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCarDTO } from './dto/create_car.dto';

@Injectable()
export class CarService {

  constructor(private prismaService: PrismaService) { }

  async createCar(data: CreateCarDTO) {

    return this.prismaService.car.create({data})
  }

  async findCarById(id_car: number){
    return this.prismaService.car.findUnique({where: {id_car}});
  }

  async findCars(){
    return this.prismaService.car.findMany();
  }

  async deleteCarById(id_car){
    return this.prismaService.car.delete({where: {id_car}});
  }

  async updateCarById(id_car:number, data: CreateCarDTO){
    const findCar = await this.findCarById(id_car);
    if(!findCar) throw new HttpException('Car Not Found', 404);
      return this.prismaService.car.update({where: {id_car}, data})
    
  }

  async findAllCarLicenses(){
    return this.prismaService.car.findMany()
  }

  async findCarLicenceById(id_car : number){
    return this.prismaService.car.findUnique({
      where: {
        id_car
      },
      select: {
        license_car: true,
      },
    });
  }

  async findCarIdByCarLicense(license_car : string){
    return this.prismaService.car.findUnique({
      where: {
        license_car
      },
      select: {
        id_car: true,
      },
    });
  }
}

