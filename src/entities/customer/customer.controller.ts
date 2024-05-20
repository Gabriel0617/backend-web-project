import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerPipe } from './customer.pipe';
import { CreateCustomerDTO } from './dto/create_customer.dto';

@Controller('customer')
export class CustomerController {
    constructor(
        private customerService: CustomerService
      ) { }

      @Post()
      createCustomer(@Body(new CustomerPipe()) data: CreateCustomerDTO){
       
        
        return this.customerService.createCustomer(data)
      }
    
      @Get()
      getAllCustomers(){
        return this.customerService.findCustomers();
      }
    
      @Get(':id/full')
      getCustomerById(@Param('id', ParseIntPipe)id_customer:number){
        return this.customerService.findCustomerById(id_customer);
      }

      @Get(':id/number')
      getCustomerNumberById(@Param('id', ParseIntPipe) id_customer : number){
        return this.customerService.findCustomerNumberById(id_customer);
      }
    
      @Get(':number')
      getCustomerIdByNumber(@Param('name') customer_number : string){
        return this.customerService.findCustomerIdByNumber(customer_number);
      }
    
     
    
      @Delete(':id')
      deleteCustomerById(@Param('id', ParseIntPipe)id_customer:number){
        return this.customerService.deleteCustomerById(id_customer);
      }
    
      @Patch(':id')
      updateCustomerById(@Param('id', ParseIntPipe)id_customer: number,@Body() data: CreateCustomerDTO){
        this.customerService.updateCustomerById(id_customer, data)
      }
}
