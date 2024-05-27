import { Injectable } from '@nestjs/common';
import { AuthPayloadDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';



@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService, private prismaService : PrismaService) {}



 async validateUser({ username, password }: AuthPayloadDto) {
    const findUser = await this.prismaService.user.findUnique({where : {username}})
    if (!findUser) return null;
    if (password === findUser.password) {
      const { password, ...user } = findUser;
      console.log(user)
      return this.jwtService.sign(user);
    }
  }


}
