import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { BusBrandService } from './bus_brand.service';
import { BusBrandPipe } from './bus_brand.pipe';
import { CreateBusBrandDTO } from './dto/create_bus_brand.dto';


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

  @Patch(':id')
  updateCarById(@Param('id', ParseIntPipe)id_brand: number,@Body() data: CreateBusBrandDTO){
    this.busBrandService.updateBusBrandById(id_brand, data)
  }


}
