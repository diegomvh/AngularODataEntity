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
  Expand, 
  Select,
  HttpOptions} from 'angular-odata';

//#region ODataApi Imports
import { Customer } from '../../../NorthwindModel/customer.entity';
import { Employee } from '../../../NorthwindModel/employee.entity';
import { OrderDetail } from '../../../NorthwindModel/order_detail.entity';
import { Order } from '../../../NorthwindModel/order.entity';
import { Shipper } from '../../../NorthwindModel/shipper.entity';
import { CustomerModel } from '../../../NorthwindModel/customer.model';
import { EmployeeModel } from '../../../NorthwindModel/employee.model';
import { OrderDetailModel } from '../../../NorthwindModel/order_detail.model';
import { OrderModel } from '../../../NorthwindModel/order.model';
import { ShipperModel } from '../../../NorthwindModel/shipper.model';
import { CustomerCollection } from '../../../NorthwindModel/customer.collection';
import { EmployeeCollection } from '../../../NorthwindModel/employee.collection';
import { OrderDetailCollection } from '../../../NorthwindModel/order_detail.collection';
import { OrderCollection } from '../../../NorthwindModel/order.collection';
import { ShipperCollection } from '../../../NorthwindModel/shipper.collection';
//#endregion

@Injectable()
export class OrdersService extends ODataEntitySetService<Order> {
  constructor(protected client: ODataClient) {
    super(client, 'Orders', 'NorthwindModel.Order');
  }

  //#region ODataApi Model
  orderModel(attrs?: Partial<Order>): OrderModel<Order> {
    return this.entity().asModel<OrderModel<Order>>(attrs || {});
  }
  //#endregion
  //#region ODataApi Collection
  orderCollection(models?: Partial<Order>[]): OrderCollection<Order, OrderModel<Order>> {
    return this.entities().asCollection<OrderModel<Order>, OrderCollection<Order, OrderModel<Order>>>(models || []);
  }
  //#endregion
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
  public order_Details(entity: EntityKey<Order>): ODataNavigationPropertyResource<OrderDetail> {
    return this.entity(entity).navigationProperty<OrderDetail>('Order_Details');
  }
  public shipper(entity: EntityKey<Order>): ODataNavigationPropertyResource<Shipper> {
    return this.entity(entity).navigationProperty<Shipper>('Shipper');
  }
  //#endregion
}
