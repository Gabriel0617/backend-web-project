import { Body, Controller, Post } from '@nestjs/common';
import { CarService } from './car.service';
import { CarPipe } from './car.pipe';
import { CreateCarDTO } from './dto/create_car.dto';

@Controller('car')
export class CarController {
    constructor(
        private carService: CarService
      ) { }

      @Post()
  createDriver(@Body(new CarPipe()) input: CreateCarDTO){
    console.log(input);
    console.log("hoollaaaaaa");
    
    return this.carService.createCar(input)
  }
}
