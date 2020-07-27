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
import { Customer } from '../../../NorthwindModel/customer.entity';
import { Employee } from '../../../NorthwindModel/employee.entity';
import { Order_Detail } from '../../../NorthwindModel/order_detail.entity';
import { Order } from '../../../NorthwindModel/order.entity';
import { Shipper } from '../../../NorthwindModel/shipper.entity';
//#endregion

@Injectable()
export class OrdersService extends ODataEntityService<Order> {
  static path: string = 'Orders';
  static type: string = 'ODataWebExperimental.Northwind.Model.Orders';
  static entityType: string = 'NorthwindModel.Order';

  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  public customer(entity: EntityKey<Order>): ODataNavigationPropertyResource<Customer> {
    return this.entity(entity).navigationProperty<Customer>('Customer');
  }
  public employee(entity: EntityKey<Order>): ODataNavigationPropertyResource<Employee> {
    return this.entity(entity).navigationProperty<Employee>('Employee');
  }
  public order_Details(entity: EntityKey<Order>): ODataNavigationPropertyResource<Order_Detail> {
    return this.entity(entity).navigationProperty<Order_Detail>('Order_Details');
  }
  public shipper(entity: EntityKey<Order>): ODataNavigationPropertyResource<Shipper> {
    return this.entity(entity).navigationProperty<Shipper>('Shipper');
  }
  //#endregion
}
