import { Injectable, NotFoundException } from '@nestjs/common';
import { Driver } from './driver.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDriverDTO } from './dto/create_driver.dto';




@Injectable()
export class DriverService {
  constructor(private prismaService: PrismaService) { }

  async createDriver(input: CreateDriverDTO) {

    return this.prismaService.driver.create({
      data: input
    })
  }
}
