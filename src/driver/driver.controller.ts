import { Body, Controller, Delete, Get, Param, Post, Patch, Query, UsePipes, ValidationPipe, ParseIntPipe } from '@nestjs/common';
import { DriverService } from './driver.service';
import { Driver } from './driver.entity';
import { CreateDriverDTO } from './dto/create_driver.dto';

@Controller('drivers')
export class DriverController {
  constructor(
    private driverService: DriverService
  ) { }

  @Post()
  createDriver(@Body() input: CreateDriverDTO){
    console.log(input);
    
    return this.driverService.createDriver(input)
  }

}