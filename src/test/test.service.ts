import { Injectable } from '@nestjs/common';

@Injectable()
export class TestService {
    helloWorld(){
        return 'hello World';
    }
}
