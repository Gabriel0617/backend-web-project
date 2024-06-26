import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerPipe } from './customer.pipe';
import { CreateCustomerDTO } from './dto/create_customer.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';

@Controller('customer')
export class CustomerController {
    constructor(
        private customerService: CustomerService
      ) { }
      @UseGuards(JwtAuthGuard)
      @Post()
      createCustomer(@Body(new CustomerPipe()) data: CreateCustomerDTO){
       
        
        return this.customerService.createCustomer(data)
      }
      @UseGuards(JwtAuthGuard)
      @Get()
      getAllCustomers(){
        return this.customerService.findCustomers();
      }
      @UseGuards(JwtAuthGuard)
      @Get('allNumbers')
      getAllCustomerNumbers(){
        return this.customerService.findAllCustomerNumbers();
      }
      @UseGuards(JwtAuthGuard)
      @Get(':id/full')
      getCustomerById(@Param('id', ParseIntPipe)id_customer:number){
        return this.customerService.findCustomerById(id_customer);
      }
      @UseGuards(JwtAuthGuard)
      @Get(':id/number')
      getCustomerNumberById(@Param('id', ParseIntPipe) id_customer : number){
        return this.customerService.findCustomerNumberById(id_customer);
      }


@UseGuards(JwtAuthGuard)
      @Get(':number/id')
      getCustomerIdByNumber(@Param('number') customer_number : string){

        return this.customerService.findCustomerIdByNumber(customer_number);
      }
    
     
     
      @UseGuards(JwtAuthGuard)
      @Delete(':id')
      deleteCustomerById(@Param('id', ParseIntPipe)id_customer:number){
        return this.customerService.deleteCustomerById(id_customer);
      }
      @UseGuards(JwtAuthGuard)
      @Patch(':id')
      updateCustomerById(@Param('id', ParseIntPipe)id_customer: number,@Body() data: CreateCustomerDTO){
        this.customerService.updateCustomerById(id_customer, data)
      }
}
