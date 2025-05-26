import { Injectable } from '@angular/core';
import { ODataClient, 
  ODataActionResource, 
  ODataActionOptions, 
  ODataFunctionResource, 
  ODataFunctionOptions, 
  ODataEntitySetService, 
  ODataOptions,
  EntityKey } from 'angular-odata';
import { Customer } from '../../../NorthwindModel/customer.entity';

@Injectable()
export class CustomersService extends ODataEntitySetService<Customer> {
  constructor(client: ODataClient) {
    super(client, 'Customers', 'NorthwindModel.Customer');
  }
  customerModel(entity?: Partial<Customer>) {
    return this.model(entity);
  }
  customerCollection(entities?: Partial<Customer>[]) {
    return this.collection(entities);
  }
}
