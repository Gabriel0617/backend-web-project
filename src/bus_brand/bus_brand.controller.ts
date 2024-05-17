import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
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
  getAllBrands(){
    return this.busBrandService.findBusBrands();
  }

  @Get(':id')
  getBrandById(@Param('id', ParseIntPipe) id_brand : number){
    return this.busBrandService.findBusBrandById(id_brand);
  }

  @Delete(':id')
  deleteBrandById(@Param('id', ParseIntPipe) id_brand : number){
    return this.busBrandService.deleteBrandById(id_brand);
  }


}
