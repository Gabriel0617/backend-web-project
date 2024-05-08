import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TestModule } from './test/test.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { DriverModule } from './driver/driver.module';

@Module({
  imports: [TasksModule, DriverModule, TestModule,TypeOrmModule.forRoot(typeOrmConfig)],
})
export class AppModule {}
