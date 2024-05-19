import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBusBrandDTO } from './dto/create_bus_brand.dto';
import { async } from 'rxjs';

@Injectable()
export class BusBrandService {
  constructor(private prismaService: PrismaService) { }

  async createBusBrand(data: CreateBusBrandDTO) {

    return this.prismaService.bus_brand.create({data})
  }


  async findBusBrands(){
    return this.prismaService.bus_brand.findMany();
  }

  async findBusBrandById(id_brand : number){
    return this.prismaService.bus_brand.findUnique({where:{id_brand}});
  }

  async deleteBrandById(id_brand : number){
    return this.prismaService.bus_brand.delete({where:{id_brand}});
  }


  async findAll(){
    return this.prismaService.bus_brand.findMany(); // Utiliza el método find() del repositorio para obtener todas las marcas de autobuses
  }

  async updateBusBrandById(id_brand:number, data: CreateBusBrandDTO){
    const findCar = await this.findBusBrandById(id_brand);
    if(!findCar) throw new HttpException('Brand Not Found', 404);
      return this.prismaService.bus_brand.update({where: {id_brand}, data})
    
  }

  async findBusBrandNameById(id_brand : number){
    return this.prismaService.bus_brand.findUnique({
      where: {
        id_brand
      },
      select: {
        brand_name: true,
      },
    });
  }

  async findBusBrandIdByName(brand_name : string){
    return this.prismaService.bus_brand.findUnique({
      where: {
        brand_name
      },
      select: {
        id_brand: true,
      },
    });
  }

  async findAllBrandNames(){
    return this.prismaService.bus_brand.findMany({
      select: {
        brand_name: true,
      },
    });
  }

}
