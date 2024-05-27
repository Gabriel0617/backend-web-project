import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { RequestPipe } from './request.pipe';
import { CreateRequestDTO } from './dto/create_request.dto';
import { RequestService } from './request.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';

@Controller('request')
export class RequestController {
    constructor(
        private requestService: RequestService
      ) { }
      @UseGuards(JwtAuthGuard)
      @Post()
  createRequest(@Body(new RequestPipe()) data: CreateRequestDTO){
   
    
    return this.requestService.createRequest(data)
  }
  @UseGuards(JwtAuthGuard)
  @Get()
  getAllRequest(){
    return this.requestService.findRequests();
  }
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  getRequestById(@Param('id', ParseIntPipe)id_request:number){
    return this.requestService.findRequestById(id_request);
  }

 
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  deleteRequestById(@Param('id', ParseIntPipe)id_request:number){
    return this.requestService.deleteRequestById(id_request);
  }
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  updateRequestById(@Param('id', ParseIntPipe)id_request: number,@Body() data: CreateRequestDTO){
    this.requestService.updateRequestById(id_request, data)   
}
}
