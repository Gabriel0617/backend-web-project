import { Body, Controller, Delete, Get, Param, Post , Patch, Query, UsePipes, ValidationPipe, ParseIntPipe} from '@nestjs/common';
import { DriverService } from './driver.service';
import { Driver } from './driver.entity';

@Controller('drivers')
export class DriverController {
    constructor(private  driverService: DriverService) {}

    // @Get()
    // getTasks(@Query() filterDto: GetTasksFilterDto): Task[]{
    //   console.log(filterDto);
    //   if(Object.keys(filterDto).length){
    //     return this.tasksService.getTasksWithFilters(filterDto);
    //   }else{

    //     return this.tasksService.getAllTasks();
    //   }
    // }

    @Get()
    getTaskById(){
      return this.driverService.findAll();
    }

    // @Delete('/:id')
    // deleleTask(@Param('id') id: string): void{
    //    this.tasksService.deleteTask(id);
    // }
    //     @Post()
    //     @UsePipes(ValidationPipe)
    // createTask(@Body() createTaskDto: CreateTaskDto): Task{
    //   return this.tasksService.createTask(createTaskDto);

    // }
    // @Patch('/:id/status')
    // updateTaskStatus(
    //   @Param('id') id: string,
    //   @Body('status', TaskStatusValidationPipe ) status: TaskStatus
    // ):Task{
    //   return this.tasksService.updateTaskStatus(id, status);
    // }
    }