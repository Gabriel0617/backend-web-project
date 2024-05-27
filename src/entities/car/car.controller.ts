import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { CarService } from './car.service';
import { CarPipe } from './car.pipe';
import { CreateCarDTO } from './dto/create_car.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';

@Controller('car')
export class CarController {
    constructor(
        private carService: CarService
      ) { }
      @UseGuards(JwtAuthGuard)
      @Post()
  createCar(@Body(new CarPipe()) data: CreateCarDTO){
   
    
    return this.carService.createCar(data)
  }
  @UseGuards(JwtAuthGuard)
  @Get()
  getAllCars(){
    return this.carService.findCars();
  }
  @UseGuards(JwtAuthGuard)
  @Get(':id/full')
  getCarById(@Param('id', ParseIntPipe)id_car:number){
    return this.carService.findCarById(id_car);
  }
  @UseGuards(JwtAuthGuard)
  @Get(':id/license')
  getCarLicenseById(@Param('id', ParseIntPipe) id_car : number){
    return this.carService.findCarLicenceById(id_car);
  }
  @UseGuards(JwtAuthGuard)
  @Get('allLicense')
  getAllCarLicenses(){
    return this.carService.findAllCarLicenses();
  }
  @UseGuards(JwtAuthGuard)
  @Get(':license')
  getCarIdByLicense(@Param('license') license_car : string){
    return this.carService.findCarIdByCarLicense(license_car);
  } 

 

 

  @Delete(':id')
  deleteCarById(@Param('id', ParseIntPipe)id_car:number){
    return this.carService.deleteCarById(id_car);
  }

  @Patch(':id')
  updateCarById(@Param('id', ParseIntPipe)id_car: number,@Body() data: CreateCarDTO){
    this.carService.updateCarById(id_car, data)
  }

}
