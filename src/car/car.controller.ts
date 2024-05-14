import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { CarService } from './car.service';
import { CarPipe } from './car.pipe';
import { CreateCarDTO } from './dto/create_car.dto';

@Controller('car')
export class CarController {
    constructor(
        private carService: CarService
      ) { }

      @Post()
  createCar(@Body(new CarPipe()) input: CreateCarDTO){
   
    
    return this.carService.createCar(input)
  }

  @Get()
  getAllCars(@Body(new CarPipe())input: CreateCarDTO){
    return this.carService.findCars();
  }

  @Get(':id')
  getCarById(@Param('id', ParseIntPipe)id_car:number){
    return this.carService.findCarById(id_car);
  }

  @Delete()
  deleteAllCars(){
    return this.carService.deleteAllCars();
  }

  @Delete(':id')
  deleteCarById(@Param('id', ParseIntPipe)id_car:number){
    return this.carService.deleteCarById(id_car);
  }

}
