import { Injectable, NotFoundException } from '@nestjs/common';
import { Driver } from './driver.entity';
import { DriverRepository } from './driver.repository';
import { InjectRepository } from '@nestjs/typeorm';




@Injectable()
export class DriverService {
constructor(
   @InjectRepository(DriverRepository)
   private driverRepository: DriverRepository,
){}
  async findDriverById(id_driver: number): Promise<Driver | undefined> {
    return this.driverRepository.findOne({ where: { id_driver } });
  }

  async findAll(): Promise<Driver[]> {
   return this.driverRepository.find();
 }

//    private tasks: Task[] = [];

//    getAllTasks():Task[]{
//     return this.tasks;
//    }

//    createTask(createTaskDto: CreateTaskDto){
//   const{title, description} = createTaskDto;
  
//       const task: Task = {
//          id: uuid(),
//          title,
//          description,
//          status: TaskStatus.OPEN,
//       };

//       this.tasks.push(task);
//       return task;
//    }

//    deleteTask(id: string): void{
//       const found = this.getTaskById(id);
//       this.tasks = this.tasks.filter(task => task.id !== found.id);
//    }


//    getTasksWithFilters(filterDto: GetTasksFilterDto):Task[]{
//       const{status, search} = filterDto;

//       let tasks = this.getAllTasks();

//       if(status){
//          tasks = tasks.filter(task => task.status === status);
//       }

//       if(search){
//          tasks = tasks.filter(task => task.title.includes(search) ||
//           task.description.includes(search));
//       }
//       return tasks;
//    }

//    updateTaskStatus(id: string, status: TaskStatus): Task{
//       const task = this.getTaskById(id);
//       task.status = status;
//       return task;
//    }
}
