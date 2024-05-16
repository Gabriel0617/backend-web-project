import {Body, Controller, Get, Post} from '@nestjs/common';
import { BusBrandService } from './bus_brand.service';
import { BusBrandPipe } from './bus_brand.pipe';
import { CreateBusBrandDTO } from './dto/create_bus_brand.dto';
import {CarPipe} from "../car/car.pipe";
import {CreateCarDTO} from "../car/dto/create_car.dto";

@Controller('bus-brand')
export class BusBrandController {
    constructor(
        private busBrandService: BusBrandService
      ) { }

      @Post()
  createDriver(@Body(new BusBrandPipe()) data: CreateBusBrandDTO){
  
    return this.busBrandService.createBusBrand(data)
  }

  @Get()
  getAllCars(@Body(new BusBrandPipe())input: CreateBusBrandDTO){
    return this.busBrandService.findAll();
  }
}
