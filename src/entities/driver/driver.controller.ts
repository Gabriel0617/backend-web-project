import { Body, Controller, Delete, Get, Param, Post, Patch, Query, UsePipes, ValidationPipe, ParseIntPipe, UseGuards } from '@nestjs/common';
import { DriverService } from './driver.service';

import { CreateDriverDTO, CreatePermanentDriverDTO, CreateReserverDriverDTO } from './dto/create_driver.dto';
import { DriverPipe } from './driver.pipe';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';

@Controller('driver')
export class DriverController {
  constructor(
    private driverService: DriverService
  ) { }


  @UseGuards(JwtAuthGuard)
  @Post()
  createDriver(@Body(new DriverPipe()) data: CreateDriverDTO) {
    if ('id_car' in data) {
      return this.driverService.createPermanentDriver(data as CreatePermanentDriverDTO)
    } else {
      return this.driverService.createReserverDriver(data as CreateReserverDriverDTO)
    }
  }
@UseGuards(JwtAuthGuard)
  @Get('permanent')
  getAllPermanentDrivers() {
    return this.driverService.findAllPermanentDrivers();
  }
  @UseGuards(JwtAuthGuard)
  @Get('reserver')
  getAllReserverDrivers() {

    return this.driverService.findAllReserverDrivers();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  getDriverById(@Param('id', ParseIntPipe) id_driver: number) {
    return this.driverService.findDriverById(id_driver);
  }
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  updateDriverById(@Param('id', ParseIntPipe) id_driver: number, @Body() data: CreateDriverDTO) {
    if ('id_car' in data) {
      return this.driverService.updatePermanentDriverById(id_driver, data as CreatePermanentDriverDTO)
    } else {
      return this.driverService.updateReserverDriverById(id_driver, data as CreateReserverDriverDTO)
    }
  }
  @UseGuards(JwtAuthGuard)
  @Delete(':id/permanent')
  deletePermanentDriverById(@Param('id', ParseIntPipe) id_driver: number) {
    return this.driverService.deletePermanentDriverById(id_driver);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id/reserver')
  deleteReserverDriverById(@Param('id', ParseIntPipe) id_driver: number) {
    return this.driverService.deleteReserverDriverById(id_driver);
  }


  @Get('drivers/ByDistrict')
  getAllDriverByDistrict(){
    return this.driverService.findAllDriversByDistrict();
  }
}