import { Injectable } from '@nestjs/common';
import { AuthPayloadDto } from './dto/auth.dto';


const fakeUsers = [
    {
        id: 1,
        username: 'test',
        password: 'password'
    },
    {
        id: 2,
        username: 'test2',
        password: 'password2'
    }
]


@Injectable()
export class AuthService {
    validateUser({username, password}: AuthPayloadDto){
        const findUser = fakeUsers.find((user) => user.username === username);
        if(!findUser) return null;

        if(password === findUser.password){
            
        }
    }
}
