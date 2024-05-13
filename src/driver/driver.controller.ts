import { Body, Controller, Delete, Get, Param, Post, Patch, Query, UsePipes, ValidationPipe, ParseIntPipe } from '@nestjs/common';
import { DriverService } from './driver.service';

import { CreateDriverDTO, CreatePermanentDriverDTO, CreateReserverDriverDTO } from './dto/create_driver.dto';
import { DriverPipe } from './driver.pipe';

@Controller('drivers')
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

}}