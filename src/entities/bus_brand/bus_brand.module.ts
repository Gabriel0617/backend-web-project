import { Module } from '@nestjs/common';
import { BusBrandService } from './bus_brand.service';
import { BusBrandController } from './bus_brand.controller';

@Module({    
    providers: [BusBrandService],
    controllers: [BusBrandController]})
export class BusBrandModule {}
