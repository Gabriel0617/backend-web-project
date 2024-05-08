import { Module } from '@nestjs/common';
import { DriverModule } from './driver/driver.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [ DriverModule, PrismaModule],
})
export class AppModule {}
