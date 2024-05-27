import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { BusBrandService } from './bus_brand.service';
import { BusBrandPipe } from './bus_brand.pipe';
import { CreateBusBrandDTO } from './dto/create_bus_brand.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { Roles } from 'src/auth/roles/roles.decorator';
import { RolesGuard } from 'src/auth/roles/roles.guard';




@Controller('bus-brand')
export class BusBrandController {
    constructor(
        private busBrandService: BusBrandService
      ) { }
      @UseGuards(JwtAuthGuard)
      @Post()
  createDriver(@Body(new BusBrandPipe()) data: CreateBusBrandDTO){
  
    return this.busBrandService.createBusBrand(data)
  }
  @UseGuards(JwtAuthGuard)
  @Get()
  getAllBrands(){
    return this.busBrandService.findBusBrands();
  }
  @UseGuards(JwtAuthGuard)
  @Get('allNames')

  getAllBrandNames(){
    return this.busBrandService.findAllBrandNames();
  }


  @UseGuards(JwtAuthGuard)
  @Get(':id/full')
  getBrandById(@Param('id', ParseIntPipe) id_brand : number){
    return this.busBrandService.findBusBrandById(id_brand);
  }


  @UseGuards(JwtAuthGuard)
  @Get(':id/name')
  getBrandNameById(@Param('id', ParseIntPipe) id_brand : number){
    return this.busBrandService.findBusBrandNameById(id_brand);
  }


  @UseGuards(JwtAuthGuard)
  @Get(':name')
  getBrandIdByName(@Param('name') brand_name : string){
    return this.busBrandService.findBusBrandIdByName(brand_name);
  }


  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  deleteBrandById(@Param('id', ParseIntPipe) id_brand : number){
    return this.busBrandService.deleteBrandById(id_brand);
    
  }



  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  updateCarById(@Param('id', ParseIntPipe)id_brand: number,@Body() data: CreateBusBrandDTO){
    this.busBrandService.updateBusBrandById(id_brand, data)
  }


}
