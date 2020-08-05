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
//#endregion

@Injectable()
export class CustomersService extends ODataService<Customer> {
  constructor(protected client: ODataClient) {
    super(client, 'Customers', 'NorthwindModel.Customer');
  }

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
