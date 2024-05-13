import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { CreateDriverDTO } from './dto/create_driver.dto';

@Injectable()
export class DriverPipe implements PipeTransform {
  transform(value: CreateDriverDTO, metadata: ArgumentMetadata) {
    return {
      ...value,
      id_driver: parseInt(value.id_driver as unknown as string),
    };
  }
}
