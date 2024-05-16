import { Module } from '@nestjs/common';
import { DriverModule } from './driver/driver.module';
import { PrismaModule } from './prisma/prisma.module';
import { CarModule } from './car/car.module';
import { BusBrandController } from './bus_brand/bus_brand.controller';
import { BusBrandService } from './bus_brand/bus_brand.service';
import { BusBrandModule } from './bus_brand/bus_brand.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [ DriverModule, PrismaModule, CarModule, BusBrandModule, UserModule],
  controllers: [BusBrandController],
  providers: [BusBrandService],
})
export class AppModule {}
