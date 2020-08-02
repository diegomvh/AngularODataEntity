import { ODataModel, HttpOptions, Duration } from 'angular-odata';
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

export class OrderModel<E extends Order> extends ODataModel<E> {
  //#region ODataApi Properties
  orderID: number;
  customerID?: string;
  employeeID?: number;
  orderDate?: Date;
  requiredDate?: Date;
  shippedDate?: Date;
  shipVia?: number;
  freight?: number;
  shipName?: string;
  shipAddress?: string;
  shipCity?: string;
  shipRegion?: string;
  shipPostalCode?: string;
  shipCountry?: string;
  customer?: CustomerModel<Customer>;
  employee?: EmployeeModel<Employee>;
  orderDetails?: Order_DetailCollection<Order_Detail, Order_DetailModel<Order_Detail>>;
  shipper?: ShipperModel<Shipper>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  public setCustomer(model: CustomerModel<Customer> | null): Observable<this> {
    return this.setNavigationProperty<Customer, CustomerModel<Customer>>('Customer', model);
  }
  public setEmployee(model: EmployeeModel<Employee> | null): Observable<this> {
    return this.setNavigationProperty<Employee, EmployeeModel<Employee>>('Employee', model);
  }
  public setShipper(model: ShipperModel<Shipper> | null): Observable<this> {
    return this.setNavigationProperty<Shipper, ShipperModel<Shipper>>('Shipper', model);
  }
  //#endregion
}