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
  createDriver(@Body(new DriverPipe()) data: CreateDriverDTO){
    if('id_car' in data){
    return this.driverService.createPermanentDriver(data as CreatePermanentDriverDTO)
  }else{
    return this.driverService.createReserverDriver(data as CreateReserverDriverDTO)
  }
}


@Get(':id')
getDriverById(@Param('id', ParseIntPipe)id_driver :number){
  return this.driverService.findDriverById(id_driver);
}

@Patch(':id')
updateDriverById(@Param('id', ParseIntPipe)id_driver: number,@Body() data: CreateDriverDTO){
  if('id_car' in data){
  return this.driverService.updatePermanentDriverById(id_driver, data as CreatePermanentDriverDTO)
}else{
  return this.driverService.updateReserverDriverById(id_driver, data as CreateReserverDriverDTO)
}
}
}