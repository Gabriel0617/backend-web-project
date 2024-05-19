import { Module } from '@nestjs/common';
import { ServicePerformedController } from './service_performed.controller';
import { ServicePerformedService } from './service_performed.service';

@Module({
  controllers: [ServicePerformedController],
  providers: [ServicePerformedService]
})
export class ServicePerformedModule {}
