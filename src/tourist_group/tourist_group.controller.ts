import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { TouristGroupPipe } from './tourist_group.pipe';
import { CreateTouristGroupDTO } from './dto/create_tourist_group.dto';
import { tourist_group } from '@prisma/client';
import { TouristGroupService } from './tourist_group.service';

@Controller('tourist-group')
export class TouristGroupController {
    constructor(
        private touristGroupService: TouristGroupService
    ) { }

    @Post()
    createTouristGroup(@Body(new TouristGroupPipe()) data: CreateTouristGroupDTO) {


        return this.touristGroupService.createTouristGroup(data)
    }

    @Get()
    getAllTouristGroups() {
        return this.touristGroupService.findTouristGroups();
    }

    @Get(':id')
    getTouristGroupById(@Param('id', ParseIntPipe) id_tourist_group: number) {
        return this.touristGroupService.findTouristGroupById(id_tourist_group);
    }

    @Delete(':id')
    deleteTouristGroupById(@Param('id', ParseIntPipe) id_tourist_group: number) {
        return this.touristGroupService.deleteTouristGroupById(id_tourist_group);
    }

    @Patch(':id')
    updateTouristGroupById(@Param('id', ParseIntPipe) id_tourist_group: number, @Body() data: CreateTouristGroupDTO) {
        this.touristGroupService.updateTouristGroupById(id_tourist_group, data)
    }
}
