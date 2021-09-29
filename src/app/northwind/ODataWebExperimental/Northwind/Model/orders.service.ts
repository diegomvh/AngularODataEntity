import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApiGen ODataImports
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
  ODataOptions,
  ODataQueryArgumentsOptions
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
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
  //#region ODataApiGen Model
  orderModel(attrs?: Partial<Order>): OrderModel<Order> {
    return this.entity().asModel<OrderModel<Order>>(attrs || {});
  }//#endregion
  //#region ODataApiGen Collection
  orderCollection(models?: Partial<Order>[]): OrderCollection<Order, OrderModel<Order>> {
    return this.entities().asCollection<OrderModel<Order>, OrderCollection<Order, OrderModel<Order>>>(models || []);
  }//#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  public customer(key: EntityKey<Order>): ODataNavigationPropertyResource<Customer> { 
    return this.entity(key).navigationProperty<Customer>('Customer'); 
  }
  public fetchCustomer(key: EntityKey<Order>, options?: ODataQueryArgumentsOptions<Customer>) {
    return this.fetchNavigationProperty<Customer>(
      this.customer(key), 
      'entity', options) as Observable<ODataEntity<Customer>>;
  }
  public setCustomerAsCustomer(key: EntityKey<Order>, target: ODataEntityResource<ODataEntity<Customer>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.customer(key).reference()
      .set(target, {etag});
  }
  public unsetCustomerAsCustomer(key: EntityKey<Order>, {target, etag}: {target?: ODataEntityResource<ODataEntity<Customer>>, etag?: string} = {}): Observable<any> {
    return this.customer(key).reference()
      .unset({etag});
  }
  public employee(key: EntityKey<Order>): ODataNavigationPropertyResource<Employee> { 
    return this.entity(key).navigationProperty<Employee>('Employee'); 
  }
  public fetchEmployee(key: EntityKey<Order>, options?: ODataQueryArgumentsOptions<Employee>) {
    return this.fetchNavigationProperty<Employee>(
      this.employee(key), 
      'entity', options) as Observable<ODataEntity<Employee>>;
  }
  public setEmployeeAsEmployee(key: EntityKey<Order>, target: ODataEntityResource<ODataEntity<Employee>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.employee(key).reference()
      .set(target, {etag});
  }
  public unsetEmployeeAsEmployee(key: EntityKey<Order>, {target, etag}: {target?: ODataEntityResource<ODataEntity<Employee>>, etag?: string} = {}): Observable<any> {
    return this.employee(key).reference()
      .unset({etag});
  }
  public order_Details(key: EntityKey<Order>): ODataNavigationPropertyResource<OrderDetail> { 
    return this.entity(key).navigationProperty<OrderDetail>('Order_Details'); 
  }
  public fetchOrder_Details(key: EntityKey<Order>, options?: ODataQueryArgumentsOptions<OrderDetail>) {
    return this.fetchNavigationProperty<OrderDetail>(
      this.order_Details(key), 
      'entities', options) as Observable<ODataEntities<OrderDetail>>;
  }
  public addOrderDetailToOrder_Details(key: EntityKey<Order>, target: ODataEntityResource<ODataEntities<OrderDetail>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.order_Details(key).reference()
      .add(target);
  }
  public removeOrderDetailFromOrder_Details(key: EntityKey<Order>, {target, etag}: {target?: ODataEntityResource<ODataEntities<OrderDetail>>, etag?: string} = {}): Observable<any> {
    return this.order_Details(key).reference()
      .remove(target);
  }
  public shipper(key: EntityKey<Order>): ODataNavigationPropertyResource<Shipper> { 
    return this.entity(key).navigationProperty<Shipper>('Shipper'); 
  }
  public fetchShipper(key: EntityKey<Order>, options?: ODataQueryArgumentsOptions<Shipper>) {
    return this.fetchNavigationProperty<Shipper>(
      this.shipper(key), 
      'entity', options) as Observable<ODataEntity<Shipper>>;
  }
  public setShipperAsShipper(key: EntityKey<Order>, target: ODataEntityResource<ODataEntity<Shipper>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.shipper(key).reference()
      .set(target, {etag});
  }
  public unsetShipperAsShipper(key: EntityKey<Order>, {target, etag}: {target?: ODataEntityResource<ODataEntity<Shipper>>, etag?: string} = {}): Observable<any> {
    return this.shipper(key).reference()
      .unset({etag});
  }
  //#endregion
}
