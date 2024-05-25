import { Injectable } from '@nestjs/common';
import { AuthPayloadDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';

const fakeUsers = [
  {
    id: 1,
    username: 'anson',
    password: 'password',
  },
  {
    id: 2,
    username: 'jack',
    password: 'password123',
  },
];

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService, private prismaService : PrismaService) {}

  validateUser2({ username, password }: AuthPayloadDto) {
    const findUser = fakeUsers.find((user) => user.username === username);
    if (!findUser) return null;
    if (password === findUser.password) {
      const { password, ...user } = findUser;
      return this.jwtService.sign(user);
    }
  }

 async validateUser({ username, password }: AuthPayloadDto) {
    const findUser = await this.prismaService.user.findUnique({where : {username}})
    if (!findUser) return null;
    if (password === findUser.password) {
      const { password,id_role, ...user } = findUser;
      return this.jwtService.sign(user);
    }
  }


}
