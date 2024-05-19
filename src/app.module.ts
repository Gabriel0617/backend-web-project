import { Module } from '@nestjs/common';
import { DriverModule } from './entities/driver/driver.module';
import { PrismaModule } from './prisma/prisma.module';
import { CarModule } from './entities/car/car.module';
import { BusBrandModule } from './entities/bus_brand/bus_brand.module';
import { UserModule } from './entities/user/user.module';
import { CustomerModule } from './entities/customer/customer.module';
import { RoadMapModule } from './entities/road_map/road_map.module';
import { ServiceModule } from './entities/service/service.module';
import { TouristGroupModule } from './entities/tourist_group/tourist_group.module';
import { ServicePerformedModule } from './entities/service_performed/service_performed.module';
import { RequestModule } from './entities/request/request.module';
import { RoleModule } from './entities/role/role.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [ DriverModule, PrismaModule, CarModule, BusBrandModule, UserModule, RoleModule, CustomerModule, RoadMapModule, ServiceModule, TouristGroupModule, ServicePerformedModule, RequestModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
