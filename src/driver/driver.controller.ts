import { Body, Controller, Delete, Get, Param, Post, Patch, Query, UsePipes, ValidationPipe, ParseIntPipe } from '@nestjs/common';
import { DriverService } from './driver.service';

import { CreateDriverDTO } from './dto/create_driver.dto';
import { DriverPipe } from './driver.pipe';

@Controller('drivers')
export class DriverController {
  constructor(
    private driverService: DriverService
  ) { }

  // @Post()
  // createDriver(@Body(new DriverPipe()) input: CreateDriverDTO){
  //   console.log(input);
  //   return this.driverService.createDriver(input)
  // }

}