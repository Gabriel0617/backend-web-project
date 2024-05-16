import { Body, Controller, Post } from '@nestjs/common';
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
}
