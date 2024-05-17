import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CarService } from './car.service';
import { CarPipe } from './car.pipe';
import { CreateCarDTO } from './dto/create_car.dto';

@Controller('car')
export class CarController {
    constructor(
        private carService: CarService
      ) { }

      @Post()
  createCar(@Body(new CarPipe()) data: CreateCarDTO){
   
    
    return this.carService.createCar(data)
  }

  @Get()
  getAllCars(){
    return this.carService.findCars();
  }

  @Get(':id')
  getCarById(@Param('id', ParseIntPipe)id_car:number){
    return this.carService.findCarById(id_car);
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
