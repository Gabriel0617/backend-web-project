import { Injectable } from '@nestjs/common';
import { AuthPayloadDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService, private prismaService: PrismaService) {}

  async validateUser({ username, loginPassword }: AuthPayloadDto) {
    const findUser = await this.prismaService.user.findUnique({where: {user_name: username}})
    if (!findUser) return null;
    
    const {password, ...user} = findUser
    if (loginPassword === password) {
  
      return this.jwtService.sign(user);
    }
  }
}
