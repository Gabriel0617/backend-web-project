import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { TouristGroupPipe } from './tourist_group.pipe';
import { CreateTouristGroupDTO } from './dto/create_tourist_group.dto';
import { tourist_group } from '@prisma/client';
import { TouristGroupService } from './tourist_group.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';

@Controller('tourist-group')
export class TouristGroupController {
    constructor(
        private touristGroupService: TouristGroupService
    ) { }
    @UseGuards(JwtAuthGuard)
    @Post()
    createTouristGroup(@Body(new TouristGroupPipe()) data: CreateTouristGroupDTO) {


        return this.touristGroupService.createTouristGroup(data)
    }
    @UseGuards(JwtAuthGuard)
    @Get()
    getAllTouristGroups() {
        return this.touristGroupService.findTouristGroups();
    }
    @UseGuards(JwtAuthGuard)
    @Get('allNumbers')
    getAllTouristGroupNumbers(){
        return this.touristGroupService.findAllTouristGroupNumbers();
    }
    @UseGuards(JwtAuthGuard)
    @Get(':id/number')
    getTouristGroupNumberById(@Param('id', ParseIntPipe) id_tourist_group: number) {
        return this.touristGroupService.findTouristGroupNumberById(id_tourist_group);
    }
    @UseGuards(JwtAuthGuard)
    @Get(':number/id')
    getTouristGroupIdbyNumber(@Param('number', ParseIntPipe) group_number: number) {
        return this.touristGroupService.findTouristGroupIdByNumber(group_number);
    }
    @UseGuards(JwtAuthGuard)
    @Get(':id')
    getTouristGroupById(@Param('id', ParseIntPipe) id_tourist_group: number) {
        return this.touristGroupService.findTouristGroupById(id_tourist_group);
    }
    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    deleteTouristGroupById(@Param('id', ParseIntPipe) id_tourist_group: number) {
        return this.touristGroupService.deleteTouristGroupById(id_tourist_group);
    }
    @UseGuards(JwtAuthGuard)
    @Patch(':id')
    updateTouristGroupById(@Param('id', ParseIntPipe) id_tourist_group: number, @Body() data: CreateTouristGroupDTO) {
        this.touristGroupService.updateTouristGroupById(id_tourist_group, data)
    }
}
