import { HttpException, Injectable, NotFoundException } from '@nestjs/common';

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

  async deleteDriverById(id_driver){
    return this.prismaService.driver.delete({where: {id_driver}});
  }

  async deletePermanentDriverById(id_driver){
    await this.prismaService.driver.delete({where : {id_driver}});
    return this.prismaService.permanent_driver.delete({where: {id_driver}});
  }

  async deleteReserverDriverById(id_driver){
    await this.prismaService.driver.delete({where : {id_driver}});
    return this.prismaService.reserver_driver.delete({where: {id_driver}});
  }



  async findDriverById(id_driver: number) {
  
   
    const driver = await this.prismaService.driver.findUnique({
      where: {id_driver }
    });
  
       let additionalAttributes = {};
    const exists_permanent = await this.prismaService.permanent_driver.findUnique({where:{id_driver}});
    const exists_reserver = await this.prismaService.reserver_driver.findUnique({where:{id_driver}});
    if (exists_permanent) {
      
     
        
        const { id_car } = exists_permanent
      additionalAttributes = {id_car};
      

    } else if (exists_reserver) {
     
        const { id_brand } = exists_reserver
      additionalAttributes = {id_brand};
    }
  
    return {
     ...driver,
     ...additionalAttributes,
    };
  }


  async updatePermanentDriverById(id_driver:number, data: CreatePermanentDriverDTO){
    const findPermanentDriver = await this.findDriverById(id_driver);
    if(!findPermanentDriver) throw new HttpException('Permanent Driver Not Found', 404);
    const { id_car, ...driverData } = data;
    await this.prismaService.driver.update({where : {id_driver}, data: driverData});
   
      return this.prismaService.permanent_driver.update({where: {id_driver}, data: {id_car}})
  }

  async updateReserverDriverById(id_driver:number, data: CreateReserverDriverDTO){
    const findReserverDriver = await this.findDriverById(id_driver);
    if(!findReserverDriver) throw new HttpException('Reserver Driver Not Found', 404);
    const { id_brand, ...driverData } = data;
    await this.prismaService.driver.update({where : {id_driver}, data: driverData});
      return this.prismaService.reserver_driver.update({where: {id_driver}, data: {id_brand}})
  }

  async findAllPermanentDrivers(){
    const permanent_drivers_ids = await this.prismaService.permanent_driver.findMany({select: {id_driver: true}});
    
    const complete_permanent_drivers = [];
    


    for(let i = 0; i < permanent_drivers_ids.length; i++){
 
        
      complete_permanent_drivers.push(await this.findDriverById(permanent_drivers_ids[i].id_driver))
       
    }
    return complete_permanent_drivers;
}

async findAllReserverDrivers(){
    const reserver_drivers_ids = await this.prismaService.reserver_driver.findMany({select: {id_driver: true}});
    const complete_reserver_drivers = [];
    


    for(let i = 0; i < reserver_drivers_ids.length; i++){
        complete_reserver_drivers.push(await this.findDriverById(reserver_drivers_ids[i].id_driver))
    }
    return complete_reserver_drivers;
}

async findAllDriversByDistrict(district : string) {
  


    const drivers = await this.prismaService.driver.findMany({
      where: { district },
      orderBy: { driver_name: 'asc' },
      select : {
        driver_name : true,
        driver_dni : true,
        address: true,
        phone_number : true    
      }
    });

   
  return drivers
  }


async findAllDistricts(){
  const districts = await this.prismaService.driver.findMany({
      select:  {district : true},
      distinct : 'district'
    });

  return districts
}

}

// async findAllDriversByTouristGroup(id_tourist_group : number){
//   const planned_services_ids = await this.prismaService.planned_service.findMany({
//     where: {id_tourist_group}, select:{id_service:true}
// })

// const services_performed_ids = planned_services_ids.map(  id_service =>   this.prismaService.service_performed.findUnique({where : {id_service}))
// }



