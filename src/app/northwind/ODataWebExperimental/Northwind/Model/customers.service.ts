import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { 
  ODataClient,
  ODataService, 
  ODataEntity, 
  ODataEntities, 
  ODataProperty, 
  EntityKey,
  ODataEntityResource,
  ODataEntitySetResource,
  ODataNavigationPropertyResource,
  ODataActionResource,
  ODataFunctionResource,
  HttpOptions
} from 'angular-odata';

//#region ODataApi Imports
import { CustomerDemographic } from '../../../NorthwindModel/customerdemographic.entity';
import { Customer } from '../../../NorthwindModel/customer.entity';
import { Order } from '../../../NorthwindModel/order.entity';
import { CustomerDemographicModel } from '../../../NorthwindModel/customerdemographic.model';
import { CustomerModel } from '../../../NorthwindModel/customer.model';
import { OrderModel } from '../../../NorthwindModel/order.model';
import { CustomerDemographicCollection } from '../../../NorthwindModel/customerdemographic.collection';
import { CustomerCollection } from '../../../NorthwindModel/customer.collection';
import { OrderCollection } from '../../../NorthwindModel/order.collection';
//#endregion

@Injectable()
export class CustomersService extends ODataService<Customer> {
  constructor(protected client: ODataClient) {
    super(client, 'Customers', 'NorthwindModel.Customer');
  }

  customerModel(): CustomerModel<Customer> {
    return super.model() as CustomerModel<Customer>;
  }
  
  customersCollection(): CustomerCollection<Customer, CustomerModel<Customer>> {
    return super.collection() as CustomerCollection<Customer, CustomerModel<Customer>>;
  }
}
