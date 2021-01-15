import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { 
  ODataClient,
  ODataEntitySetService, 
  ODataEntity, 
  ODataEntities, 
  ODataProperty, 
  EntityKey,
  Duration,
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
export class CustomersService extends ODataEntitySetService<Customer> {
  constructor(protected client: ODataClient) {
    super(client, 'Customers', 'NorthwindModel.Customer');
  }

  //#region ODataApi Model
  customerModel(attrs?: Partial<Customer>): CustomerModel<Customer> {
    return this.entity().asModel(attrs || {}) as CustomerModel<Customer>;
  }
  //#endregion
  //#region ODataApi Collection
  customerCollection(models?: Partial<Customer>[]): CustomerCollection<Customer, CustomerModel<Customer>> {
    return this.entities().asCollection(models || []) as CustomerCollection<Customer, CustomerModel<Customer>>;
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  public customerDemographics(entity: EntityKey<Customer>): ODataNavigationPropertyResource<CustomerDemographic> {
    return this.entity(entity).navigationProperty<CustomerDemographic>('CustomerDemographics');
  }
  public orders(entity: EntityKey<Customer>): ODataNavigationPropertyResource<Order> {
    return this.entity(entity).navigationProperty<Order>('Orders');
  }
  //#endregion
}
