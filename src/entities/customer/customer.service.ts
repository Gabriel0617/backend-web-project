import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCustomerDTO } from './dto/create_customer.dto';

@Injectable()
export class CustomerService {
    constructor(private prismaService: PrismaService) { }

    async createCustomer(data: CreateCustomerDTO) {
     
        return this.prismaService.customer.create({data})
      }
    
      async findCustomerById(id_customer: number){
        return this.prismaService.customer.findUnique({where: {id_customer}});
      }
    
      async findCustomers(){
        return this.prismaService.customer.findMany();
      }
    
    
      async deleteCustomerById(id_customer){
        return this.prismaService.customer.delete({where: {id_customer}});
      }
    
      async updateCustomerById(id_customer:number, data: CreateCustomerDTO){
        const findCustomer = await this.findCustomerById(id_customer);
        if(!findCustomer) throw new HttpException('Customer Not Found', 404);
          return this.prismaService.customer.update({where: {id_customer}, data})
        
      }

      
  async findCustomerNumberById(id_customer : number){
    return this.prismaService.customer.findUnique({
      where: {
        id_customer
      },
      select: {
        customer_id_number: true,
      },
    });
  }

  async findCustomerIdByNumber(customer_id_number : string){
    return this.prismaService.customer.findUnique({
      where: {
        customer_id_number
      },
      select: {
        id_customer: true,
      },
    });
  }
}
