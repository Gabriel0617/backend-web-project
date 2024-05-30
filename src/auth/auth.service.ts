import { Injectable } from '@nestjs/common';
import { AuthPayloadDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { comparePasswords } from 'src/utils/bcrypt';
import { log } from 'console';



@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService, private prismaService : PrismaService) {}



 async validateUser({ username, password }: AuthPayloadDto) {
    const findUser = await this.prismaService.user.findUnique({where : {username}})
    if (!findUser) return null;
    const matched = comparePasswords(password, findUser.password)
    if (matched) {
      const { password, ...user } = findUser;
      console.log(user)
      return this.jwtService.sign(user);
    }else{
      console.log("Contrasena incorrecta");
      
    }
  }


}
