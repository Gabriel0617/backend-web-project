import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { ServiceService } from './service.service';
import { ServicePipe } from './service.pipe';
import { CreatePlannedServiceDTO, CreateServiceDTO, CreateSpecialServiceDTO } from './dto/create_service.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
@Controller('service')
export class ServiceController {
  constructor(
    private serviceService: ServiceService
  ) { }
  @UseGuards(JwtAuthGuard)
  @Post()
  createService(@Body(new ServicePipe()) data: CreateServiceDTO) {
    if ('pickup_time' in data) {
      return this.serviceService.createPlannedService(data as CreatePlannedServiceDTO)
    } else if ('traveled_km' in data) {
      return this.serviceService.createSpecialService(data as CreateSpecialServiceDTO)
    }
  }
  @UseGuards(JwtAuthGuard)
  @Get('planned')
  getAllPlannedServices() {
    return this.serviceService.findAllPlannedServices();
  }
  @UseGuards(JwtAuthGuard)
  @Get(':name/plannedName')
  getPlannedServiceIdByName(@Param('name') service_name: string) {
    return this.serviceService.findPlannedServiceIdByName(service_name);
  }
  @UseGuards(JwtAuthGuard)
  @Get(':id/plannedId')
  getPlannedServiceNameById(@Param('id', ParseIntPipe) id_service: number) {
    return this.serviceService.findPlannedServiceNameById(id_service);
  }
  @UseGuards(JwtAuthGuard)
  @Get(':name/specialName')
  getSpecialServiceIdByName(@Param('name') service_name: string) {
    return this.serviceService.findSpecialServiceIdByName(service_name);
  }
  @UseGuards(JwtAuthGuard)
  @Get(':id/specialId')
  getSpecialServiceNameById(@Param('id', ParseIntPipe) id_service: number) {
    return this.serviceService.findSpecialServiceNameById(id_service);
  }

  
  @UseGuards(JwtAuthGuard)
  @Get('special')
  getAllSpecialServices() {

    return this.serviceService.findAllSpecialServices();
  }
  @UseGuards(JwtAuthGuard)
  @Get('planned/names')
  getAllPlannedServicesNames() {
    return this.serviceService.findAllPlannedServicesNames();
  }
  @UseGuards(JwtAuthGuard)
  @Get('special/names')
  getAllSpecialServicesNames() {
    return this.serviceService.findAllSpecialServicesNames();
  }
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  getServiceById(@Param('id', ParseIntPipe) id_service: number) {
    return this.serviceService.findServiceById(id_service);
  }


  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  updateServiceById(@Param('id', ParseIntPipe) id_service: number, @Body() data: CreateServiceDTO) {
    if ('pickup_time' in data) {
      return this.serviceService.updatePlannedServiceById(id_service, data as CreatePlannedServiceDTO)
    } else {
      return this.serviceService.updateSpecialServiceById(id_service, data as CreateSpecialServiceDTO)
    }

  }
  @UseGuards(JwtAuthGuard)
  @Delete(':id/planned')
  deletePlannedServiceById(@Param('id', ParseIntPipe) id_service: number) {
    return this.serviceService.deletePlannedServiceById(id_service);
  }
  @UseGuards(JwtAuthGuard)
  @Delete(':id/special')
  deleteSpecialServiceById(@Param('id', ParseIntPipe) id_service: number) {
    return this.serviceService.deleteSpecialServiceById(id_service);
  }


}
