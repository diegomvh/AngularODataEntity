import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region AngularOData Imports
import { 
  Model, 
  ModelField, 
  ODataModel, 
  ODataCollection, 
  HttpOptions, 
  HttpQueryOptions, 
  Duration, 
} from 'angular-odata';//#endregion

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
  public $OrderID() {
    return this.property<number>('OrderID');
  }
  public getOrderID(options?: HttpOptions) {
    return this.getValue<number>('OrderID', options) as Observable<number>;
  }
  
  @ModelField()
  CustomerID?: string;
  public $CustomerID() {
    return this.property<string>('CustomerID');
  }
  public getCustomerID(options?: HttpOptions) {
    return this.getValue<string>('CustomerID', options) as Observable<string>;
  }
  
  @ModelField()
  EmployeeID?: number;
  public $EmployeeID() {
    return this.property<number>('EmployeeID');
  }
  public getEmployeeID(options?: HttpOptions) {
    return this.getValue<number>('EmployeeID', options) as Observable<number>;
  }
  
  @ModelField()
  OrderDate?: Date;
  public $OrderDate() {
    return this.property<Date>('OrderDate');
  }
  public getOrderDate(options?: HttpOptions) {
    return this.getValue<Date>('OrderDate', options) as Observable<Date>;
  }
  
  @ModelField()
  RequiredDate?: Date;
  public $RequiredDate() {
    return this.property<Date>('RequiredDate');
  }
  public getRequiredDate(options?: HttpOptions) {
    return this.getValue<Date>('RequiredDate', options) as Observable<Date>;
  }
  
  @ModelField()
  ShippedDate?: Date;
  public $ShippedDate() {
    return this.property<Date>('ShippedDate');
  }
  public getShippedDate(options?: HttpOptions) {
    return this.getValue<Date>('ShippedDate', options) as Observable<Date>;
  }
  
  @ModelField()
  ShipVia?: number;
  public $ShipVia() {
    return this.property<number>('ShipVia');
  }
  public getShipVia(options?: HttpOptions) {
    return this.getValue<number>('ShipVia', options) as Observable<number>;
  }
  
  @ModelField()
  Freight?: number;
  public $Freight() {
    return this.property<number>('Freight');
  }
  public getFreight(options?: HttpOptions) {
    return this.getValue<number>('Freight', options) as Observable<number>;
  }
  
  @ModelField()
  ShipName?: string;
  public $ShipName() {
    return this.property<string>('ShipName');
  }
  public getShipName(options?: HttpOptions) {
    return this.getValue<string>('ShipName', options) as Observable<string>;
  }
  
  @ModelField()
  ShipAddress?: string;
  public $ShipAddress() {
    return this.property<string>('ShipAddress');
  }
  public getShipAddress(options?: HttpOptions) {
    return this.getValue<string>('ShipAddress', options) as Observable<string>;
  }
  
  @ModelField()
  ShipCity?: string;
  public $ShipCity() {
    return this.property<string>('ShipCity');
  }
  public getShipCity(options?: HttpOptions) {
    return this.getValue<string>('ShipCity', options) as Observable<string>;
  }
  
  @ModelField()
  ShipRegion?: string;
  public $ShipRegion() {
    return this.property<string>('ShipRegion');
  }
  public getShipRegion(options?: HttpOptions) {
    return this.getValue<string>('ShipRegion', options) as Observable<string>;
  }
  
  @ModelField()
  ShipPostalCode?: string;
  public $ShipPostalCode() {
    return this.property<string>('ShipPostalCode');
  }
  public getShipPostalCode(options?: HttpOptions) {
    return this.getValue<string>('ShipPostalCode', options) as Observable<string>;
  }
  
  @ModelField()
  ShipCountry?: string;
  public $ShipCountry() {
    return this.property<string>('ShipCountry');
  }
  public getShipCountry(options?: HttpOptions) {
    return this.getValue<string>('ShipCountry', options) as Observable<string>;
  }
  
  @ModelField()
  Customer?: CustomerModel<Customer>;
  public $Customer() {
    return this.navigationProperty<Customer>('Customer');
  }
  public getCustomer() {
    return this.getReference<Customer>('Customer') as CustomerModel<Customer>;
  }
  public setCustomer(model: CustomerModel<Customer> | null, options?: HttpOptions) {
    return this.setReference<Customer>('Customer', model, options);
  }
  @ModelField()
  Employee?: EmployeeModel<Employee>;
  public $Employee() {
    return this.navigationProperty<Employee>('Employee');
  }
  public getEmployee() {
    return this.getReference<Employee>('Employee') as EmployeeModel<Employee>;
  }
  public setEmployee(model: EmployeeModel<Employee> | null, options?: HttpOptions) {
    return this.setReference<Employee>('Employee', model, options);
  }
  @ModelField()
  Order_Details?: OrderDetailCollection<OrderDetail, OrderDetailModel<OrderDetail>>;
  public $Order_Details() {
    return this.navigationProperty<OrderDetail>('Order_Details');
  }
  public getOrder_Details() {
    return this.getReference<OrderDetail>('Order_Details') as OrderDetailCollection<OrderDetail, OrderDetailModel<OrderDetail>>;
  }
  public setOrder_Details(model: OrderDetailCollection<OrderDetail, OrderDetailModel<OrderDetail>> | null, options?: HttpOptions) {
    return this.setReference<OrderDetail>('Order_Details', model, options);
  }
  @ModelField()
  Shipper?: ShipperModel<Shipper>;
  public $Shipper() {
    return this.navigationProperty<Shipper>('Shipper');
  }
  public getShipper() {
    return this.getReference<Shipper>('Shipper') as ShipperModel<Shipper>;
  }
  public setShipper(model: ShipperModel<Shipper> | null, options?: HttpOptions) {
    return this.setReference<Shipper>('Shipper', model, options);
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}