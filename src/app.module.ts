import { Module } from '@nestjs/common';
import { DriverModule } from './driver/driver.module';
import { PrismaModule } from './prisma/prisma.module';
import { CarModule } from './car/car.module';
import { BusBrandController } from './bus_brand/bus_brand.controller';
import { BusBrandService } from './bus_brand/bus_brand.service';
import { BusBrandModule } from './bus_brand/bus_brand.module';
import { UserModule } from './user/user.module';
import { RoleService } from './role/role.service';
import { RoleController } from './role/role.controller';
import { RoleModule } from './role/role.module';
import { CustomerModule } from './customer/customer.module';
import { RoadMapModule } from './road_map/road_map.module';
import { ServiceModule } from './service/service.module';

@Module({
  imports: [ DriverModule, PrismaModule, CarModule, BusBrandModule, UserModule, RoleModule, CustomerModule, RoadMapModule, ServiceModule],
  controllers: [BusBrandController, RoleController],
  providers: [BusBrandService, RoleService],
})
export class AppModule {}
