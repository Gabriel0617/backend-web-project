import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDTO } from './dto/create_user.dto';
import { encodePassword } from 'src/utils/bcrypt';

@Injectable()
export class UserService {
    constructor(private prismaService: PrismaService) { }

    async createUser(data: CreateUserDTO){
        const hashedPassword =  encodePassword(data.password);
        return this.prismaService.user.create({data: {username : data.username, password : hashedPassword,
            user_role : data.user_role
        }});
    }

    async findUsers(){
        return this.prismaService.user.findMany();
    }

    async findUserById(id_user: number){
        return this.prismaService.user.findUnique({where: {id_user}})
    }

    async editUserById(id_user: number, data : CreateUserDTO){
        const findUser = await this.findUserById(id_user);
    if(!findUser) throw new HttpException('Car Not Found', 404);
      return this.prismaService.user.update({where: {id_user}, data})
    }

    async deleteUserById(id_user: number){
        return this.prismaService.user.delete({where: {id_user}});
      }
}
