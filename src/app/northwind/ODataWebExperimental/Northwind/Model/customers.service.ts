import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { 
  ODataEntityService, 
  ODataEntityAnnotations, 
  ODataEntitiesAnnotations, 
  ODataPropertyAnnotations, 
  EntityKey,
  ODataEntityResource,
  ODataEntitySetResource,
  ODataNavigationPropertyResource,
  HttpOptions
} from 'angular-odata';

//#region ODataApi Imports
import { CustomerDemographic } from '../../../NorthwindModel/customerdemographic.entity';
import { Customer } from '../../../NorthwindModel/customer.entity';
import { Order } from '../../../NorthwindModel/order.entity';
//#endregion

@Injectable()
export class CustomersService extends ODataEntityService<Customer> {
  static path: string = 'Customers';
  static type: string = 'ODataWebExperimental.Northwind.Model.Customers';
  static entityType: string = 'NorthwindModel.Customer';

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
