import { Module } from '@nestjs/common';
import { DriverController } from './driver.controller';
import { DriverService } from './driver.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DriverRepository } from './driver.repository';
@Module({
  imports: [
    TypeOrmModule.forFeature([DriverRepository])
  ],
  controllers: [DriverController],
  providers:[DriverService]
})
export class DriverModule {}
