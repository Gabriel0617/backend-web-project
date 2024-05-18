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

  @Get('allNames')
  getAllBrandNames(){
    return this.busBrandService.findAllBrandNames();
  }

  @Get(':id/full')
  getBrandById(@Param('id', ParseIntPipe) id_brand : number){
    return this.busBrandService.findBusBrandById(id_brand);
  }

  @Get(':id/name')
  getBrandNameById(@Param('id', ParseIntPipe) id_brand : number){
    return this.busBrandService.findBusBrandNameById(id_brand);
  }

  @Get(':name')
  getBrandIdByName(@Param('name') brand_name : string){
    return this.busBrandService.findBusBrandIdByName(brand_name);
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
