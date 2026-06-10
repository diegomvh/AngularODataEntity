import { Injectable } from '@angular/core';
import { ODataClient, 
  ODataActionResource, 
  ODataActionOptions, 
  ODataFunctionResource, 
  ODataFunctionOptions, 
  ODataEntitySetService, 
  ODataOptions,
  EntityKey } from 'angular-odata';
import { CustomerModel } from '../../../NorthwindModel/customer.model';
import { CustomerCollection } from '../../../NorthwindModel/customer.collection';
import { Customer } from '../../../NorthwindModel/customer.entity';

// #region Custom
// #endregion Custom
@Injectable()
export class CustomersService extends ODataEntitySetService<Customer> {
  constructor(client: ODataClient) {
    super(client, 'Customers', 'NorthwindModel.Customer');
  }
  customerModel(entity?: Partial<Customer>) {
    return this.model<CustomerModel<Customer>>(entity);
  }
  customerCollection(entities?: Partial<Customer>[]) {
    return this.collection<CustomerModel<Customer>, CustomerCollection<Customer, CustomerModel<Customer>>>(entities);
  }
// #region Custom
// #endregion Custom
}
