import { Body, Controller, Delete, Get, Param, Post, Patch, Query, UsePipes, ValidationPipe, ParseIntPipe } from '@nestjs/common';
import { DriverService } from './driver.service';

import { CreateDriverDTO, CreatePermanentDriverDTO, CreateReserverDriverDTO } from './dto/create_driver.dto';
import { DriverPipe } from './driver.pipe';

@Controller('driver')
export class DriverController {
  constructor(
    private driverService: DriverService
  ) { }

  @Post()
  createDriver(@Body(new DriverPipe()) data: CreateDriverDTO) {
    if ('id_car' in data) {
      return this.driverService.createPermanentDriver(data as CreatePermanentDriverDTO)
    } else if('id_brand' in data) {
      return this.driverService.createReserverDriver(data as CreateReserverDriverDTO)
    }
  }

  @Get('permanent')
  getAllPermanentDrivers() {
 
    return this.driverService.findAllPermanentDrivers();
  }

  @Get('reserver')
  getAllReserverDrivers() {

    return this.driverService.findAllReserverDrivers();
  }


  @Get(':id')
  getDriverById(@Param('id', ParseIntPipe) id_driver: number) {
    return this.driverService.findDriverById(id_driver);
  }

  @Patch(':id')
  updateDriverById(@Param('id', ParseIntPipe) id_driver: number, @Body() data: CreateDriverDTO) {
    if ('id_car' in data) {
      return this.driverService.updatePermanentDriverById(id_driver, data as CreatePermanentDriverDTO)
    } else {
      return this.driverService.updateReserverDriverById(id_driver, data as CreateReserverDriverDTO)
    }
  }

  @Delete(':id/permanent')
  deletePermanentDriverById(@Param('id', ParseIntPipe) id_driver: number) {
    return this.driverService.deletePermanentDriverById(id_driver);
  }

  @Delete(':id/reserve')
  deleteReserveDriverById(@Param('id', ParseIntPipe) id_driver: number) {
    return this.driverService.deleteReserverDriverById(id_driver);
  }
}