import { Model, ModelField, ODataModel, ODataCollection, HttpOptions, Duration, Expand, Select } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Customer } from './customer.entity';
import { Employee } from './employee.entity';
import { OrderDetail } from './order_detail.entity';
import { Order } from './order.entity';
import { Shipper } from './shipper.entity';
import { CustomerModel } from './customer.model';
import { EmployeeModel } from './employee.model';
import { OrderDetailModel } from './order_detail.model';
import { ShipperModel } from './shipper.model';
import { CustomerCollection } from './customer.collection';
import { EmployeeCollection } from './employee.collection';
import { OrderDetailCollection } from './order_detail.collection';
import { OrderCollection } from './order.collection';
import { ShipperCollection } from './shipper.collection';
//#endregion

@Model()
export class OrderModel<E extends Order> extends ODataModel<E> {
  //#region ODataApi Properties
  @ModelField()
  OrderID!: number;
  
  
  @ModelField()
  CustomerID?: string;
  
  
  @ModelField()
  EmployeeID?: number;
  
  
  @ModelField()
  OrderDate?: Date;
  
  
  @ModelField()
  RequiredDate?: Date;
  
  
  @ModelField()
  ShippedDate?: Date;
  
  
  @ModelField()
  ShipVia?: number;
  
  
  @ModelField()
  Freight?: number;
  
  
  @ModelField()
  ShipName?: string;
  
  
  @ModelField()
  ShipAddress?: string;
  
  
  @ModelField()
  ShipCity?: string;
  
  
  @ModelField()
  ShipRegion?: string;
  
  
  @ModelField()
  ShipPostalCode?: string;
  
  
  @ModelField()
  ShipCountry?: string;
  
  
  @ModelField()
  Customer?: CustomerModel<Customer>;
  public getCustomer({asEntity, ...options}: {asEntity?: boolean} & HttpOptions = {}) {
    return this.getReference<Customer>('Customer', {asEntity, ...options}) as Observable<CustomerModel<Customer>>;
  }
  public setCustomer(model: CustomerModel<Customer> | null, {asEntity, ...options}: {asEntity?: boolean} & HttpOptions = {}) {
    return this.setReference<Customer>('Customer', model, {asEntity, ...options});
  }
  @ModelField()
  Employee?: EmployeeModel<Employee>;
  public getEmployee({asEntity, ...options}: {asEntity?: boolean} & HttpOptions = {}) {
    return this.getReference<Employee>('Employee', {asEntity, ...options}) as Observable<EmployeeModel<Employee>>;
  }
  public setEmployee(model: EmployeeModel<Employee> | null, {asEntity, ...options}: {asEntity?: boolean} & HttpOptions = {}) {
    return this.setReference<Employee>('Employee', model, {asEntity, ...options});
  }
  @ModelField()
  Order_Details?: OrderDetailCollection<OrderDetail, OrderDetailModel<OrderDetail>>;
  
  
  @ModelField()
  Shipper?: ShipperModel<Shipper>;
  public getShipper({asEntity, ...options}: {asEntity?: boolean} & HttpOptions = {}) {
    return this.getReference<Shipper>('Shipper', {asEntity, ...options}) as Observable<ShipperModel<Shipper>>;
  }
  public setShipper(model: ShipperModel<Shipper> | null, {asEntity, ...options}: {asEntity?: boolean} & HttpOptions = {}) {
    return this.setReference<Shipper>('Shipper', model, {asEntity, ...options});
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}