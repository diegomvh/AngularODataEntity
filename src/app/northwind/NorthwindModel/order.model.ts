import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApiGen ODataImports
import {
  Model,
  ModelField,
  ODataModel,
  ODataCollection,
  ODataOptions,
  ODataQueryArgumentsOptions,
  ODataFunctionOptions,
  ODataActionOptions,
  Duration,
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
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
  //#region ODataApiGen Properties
  @ModelField()
  OrderID!: number;
  public $$OrderID() {
    return this.property<number>('OrderID');
  }
  public $OrderID() {
    return this.getAttribute<number>('OrderID') as number;
  }
  
  public OrderID$(options?: ODataQueryArgumentsOptions<number>) {
    return this.fetchAttribute<number>('OrderID', options) as Observable<number>;
  }
  @ModelField()
  CustomerID?: string;
  public $$CustomerID() {
    return this.property<string>('CustomerID');
  }
  public $CustomerID() {
    return this.getAttribute<string>('CustomerID') as string;
  }
  
  public CustomerID$(options?: ODataQueryArgumentsOptions<string>) {
    return this.fetchAttribute<string>('CustomerID', options) as Observable<string>;
  }
  @ModelField()
  EmployeeID?: number;
  public $$EmployeeID() {
    return this.property<number>('EmployeeID');
  }
  public $EmployeeID() {
    return this.getAttribute<number>('EmployeeID') as number;
  }
  
  public EmployeeID$(options?: ODataQueryArgumentsOptions<number>) {
    return this.fetchAttribute<number>('EmployeeID', options) as Observable<number>;
  }
  @ModelField()
  OrderDate?: Date;
  public $$OrderDate() {
    return this.property<Date>('OrderDate');
  }
  public $OrderDate() {
    return this.getAttribute<Date>('OrderDate') as Date;
  }
  
  public OrderDate$(options?: ODataQueryArgumentsOptions<Date>) {
    return this.fetchAttribute<Date>('OrderDate', options) as Observable<Date>;
  }
  @ModelField()
  RequiredDate?: Date;
  public $$RequiredDate() {
    return this.property<Date>('RequiredDate');
  }
  public $RequiredDate() {
    return this.getAttribute<Date>('RequiredDate') as Date;
  }
  
  public RequiredDate$(options?: ODataQueryArgumentsOptions<Date>) {
    return this.fetchAttribute<Date>('RequiredDate', options) as Observable<Date>;
  }
  @ModelField()
  ShippedDate?: Date;
  public $$ShippedDate() {
    return this.property<Date>('ShippedDate');
  }
  public $ShippedDate() {
    return this.getAttribute<Date>('ShippedDate') as Date;
  }
  
  public ShippedDate$(options?: ODataQueryArgumentsOptions<Date>) {
    return this.fetchAttribute<Date>('ShippedDate', options) as Observable<Date>;
  }
  @ModelField()
  ShipVia?: number;
  public $$ShipVia() {
    return this.property<number>('ShipVia');
  }
  public $ShipVia() {
    return this.getAttribute<number>('ShipVia') as number;
  }
  
  public ShipVia$(options?: ODataQueryArgumentsOptions<number>) {
    return this.fetchAttribute<number>('ShipVia', options) as Observable<number>;
  }
  @ModelField()
  Freight?: number;
  public $$Freight() {
    return this.property<number>('Freight');
  }
  public $Freight() {
    return this.getAttribute<number>('Freight') as number;
  }
  
  public Freight$(options?: ODataQueryArgumentsOptions<number>) {
    return this.fetchAttribute<number>('Freight', options) as Observable<number>;
  }
  @ModelField()
  ShipName?: string;
  public $$ShipName() {
    return this.property<string>('ShipName');
  }
  public $ShipName() {
    return this.getAttribute<string>('ShipName') as string;
  }
  
  public ShipName$(options?: ODataQueryArgumentsOptions<string>) {
    return this.fetchAttribute<string>('ShipName', options) as Observable<string>;
  }
  @ModelField()
  ShipAddress?: string;
  public $$ShipAddress() {
    return this.property<string>('ShipAddress');
  }
  public $ShipAddress() {
    return this.getAttribute<string>('ShipAddress') as string;
  }
  
  public ShipAddress$(options?: ODataQueryArgumentsOptions<string>) {
    return this.fetchAttribute<string>('ShipAddress', options) as Observable<string>;
  }
  @ModelField()
  ShipCity?: string;
  public $$ShipCity() {
    return this.property<string>('ShipCity');
  }
  public $ShipCity() {
    return this.getAttribute<string>('ShipCity') as string;
  }
  
  public ShipCity$(options?: ODataQueryArgumentsOptions<string>) {
    return this.fetchAttribute<string>('ShipCity', options) as Observable<string>;
  }
  @ModelField()
  ShipRegion?: string;
  public $$ShipRegion() {
    return this.property<string>('ShipRegion');
  }
  public $ShipRegion() {
    return this.getAttribute<string>('ShipRegion') as string;
  }
  
  public ShipRegion$(options?: ODataQueryArgumentsOptions<string>) {
    return this.fetchAttribute<string>('ShipRegion', options) as Observable<string>;
  }
  @ModelField()
  ShipPostalCode?: string;
  public $$ShipPostalCode() {
    return this.property<string>('ShipPostalCode');
  }
  public $ShipPostalCode() {
    return this.getAttribute<string>('ShipPostalCode') as string;
  }
  
  public ShipPostalCode$(options?: ODataQueryArgumentsOptions<string>) {
    return this.fetchAttribute<string>('ShipPostalCode', options) as Observable<string>;
  }
  @ModelField()
  ShipCountry?: string;
  public $$ShipCountry() {
    return this.property<string>('ShipCountry');
  }
  public $ShipCountry() {
    return this.getAttribute<string>('ShipCountry') as string;
  }
  
  public ShipCountry$(options?: ODataQueryArgumentsOptions<string>) {
    return this.fetchAttribute<string>('ShipCountry', options) as Observable<string>;
  }
  @ModelField()
  Customer?: CustomerModel<Customer>;
  public $$Customer() {
    return this.navigationProperty<Customer>('Customer');
  }
  public $Customer() {
    return this.getAttribute<Customer>('Customer') as CustomerModel<Customer>;
  }
  public Customer$$(model: CustomerModel<Customer> | null, options?: ODataOptions) {
    return this.setReference<Customer>('Customer', model, options);
  }
  public Customer$(options?: ODataQueryArgumentsOptions<Customer>) {
      return this.fetchAttribute<Customer>('Customer', options) as Observable<CustomerModel<Customer>>;
    }
  @ModelField()
  Employee?: EmployeeModel<Employee>;
  public $$Employee() {
    return this.navigationProperty<Employee>('Employee');
  }
  public $Employee() {
    return this.getAttribute<Employee>('Employee') as EmployeeModel<Employee>;
  }
  public Employee$$(model: EmployeeModel<Employee> | null, options?: ODataOptions) {
    return this.setReference<Employee>('Employee', model, options);
  }
  public Employee$(options?: ODataQueryArgumentsOptions<Employee>) {
      return this.fetchAttribute<Employee>('Employee', options) as Observable<EmployeeModel<Employee>>;
    }
  @ModelField()
  Order_Details?: OrderDetailCollection<OrderDetail, OrderDetailModel<OrderDetail>>;
  public $$Order_Details() {
    return this.navigationProperty<OrderDetail>('Order_Details');
  }
  public $Order_Details() {
    return this.getAttribute<OrderDetail>('Order_Details') as OrderDetailCollection<OrderDetail, OrderDetailModel<OrderDetail>>;
  }
  public Order_Details$$(model: OrderDetailCollection<OrderDetail, OrderDetailModel<OrderDetail>> | null, options?: ODataOptions) {
    return this.setReference<OrderDetail>('Order_Details', model, options);
  }
  public Order_Details$(options?: ODataQueryArgumentsOptions<OrderDetail>) {
      return this.fetchAttribute<OrderDetail>('Order_Details', options) as Observable<OrderDetailCollection<OrderDetail, OrderDetailModel<OrderDetail>>>;
    }
  @ModelField()
  Shipper?: ShipperModel<Shipper>;
  public $$Shipper() {
    return this.navigationProperty<Shipper>('Shipper');
  }
  public $Shipper() {
    return this.getAttribute<Shipper>('Shipper') as ShipperModel<Shipper>;
  }
  public Shipper$$(model: ShipperModel<Shipper> | null, options?: ODataOptions) {
    return this.setReference<Shipper>('Shipper', model, options);
  }
  public Shipper$(options?: ODataQueryArgumentsOptions<Shipper>) {
      return this.fetchAttribute<Shipper>('Shipper', options) as Observable<ShipperModel<Shipper>>;
    }
  //#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}