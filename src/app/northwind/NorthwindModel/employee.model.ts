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
import { Employee } from './employee.entity';
import { Order } from './order.entity';
import { Territory } from './territory.entity';
import { OrderModel } from './order.model';
import { TerritoryModel } from './territory.model';
import { EmployeeCollection } from './employee.collection';
import { OrderCollection } from './order.collection';
import { TerritoryCollection } from './territory.collection';
//#endregion

@Model()
export class EmployeeModel<E extends Employee> extends ODataModel<E> {
  //#region ODataApiGen Properties
  @ModelField()
  EmployeeID!: number;
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
  LastName!: string;
  public $$LastName() {
    return this.property<string>('LastName');
  }
  public $LastName() {
    return this.getAttribute<string>('LastName') as string;
  }
  
  public LastName$(options?: ODataQueryArgumentsOptions<string>) {
    return this.fetchAttribute<string>('LastName', options) as Observable<string>;
  }
  @ModelField()
  FirstName!: string;
  public $$FirstName() {
    return this.property<string>('FirstName');
  }
  public $FirstName() {
    return this.getAttribute<string>('FirstName') as string;
  }
  
  public FirstName$(options?: ODataQueryArgumentsOptions<string>) {
    return this.fetchAttribute<string>('FirstName', options) as Observable<string>;
  }
  @ModelField()
  Title?: string;
  public $$Title() {
    return this.property<string>('Title');
  }
  public $Title() {
    return this.getAttribute<string>('Title') as string;
  }
  
  public Title$(options?: ODataQueryArgumentsOptions<string>) {
    return this.fetchAttribute<string>('Title', options) as Observable<string>;
  }
  @ModelField()
  TitleOfCourtesy?: string;
  public $$TitleOfCourtesy() {
    return this.property<string>('TitleOfCourtesy');
  }
  public $TitleOfCourtesy() {
    return this.getAttribute<string>('TitleOfCourtesy') as string;
  }
  
  public TitleOfCourtesy$(options?: ODataQueryArgumentsOptions<string>) {
    return this.fetchAttribute<string>('TitleOfCourtesy', options) as Observable<string>;
  }
  @ModelField()
  BirthDate?: Date;
  public $$BirthDate() {
    return this.property<Date>('BirthDate');
  }
  public $BirthDate() {
    return this.getAttribute<Date>('BirthDate') as Date;
  }
  
  public BirthDate$(options?: ODataQueryArgumentsOptions<Date>) {
    return this.fetchAttribute<Date>('BirthDate', options) as Observable<Date>;
  }
  @ModelField()
  HireDate?: Date;
  public $$HireDate() {
    return this.property<Date>('HireDate');
  }
  public $HireDate() {
    return this.getAttribute<Date>('HireDate') as Date;
  }
  
  public HireDate$(options?: ODataQueryArgumentsOptions<Date>) {
    return this.fetchAttribute<Date>('HireDate', options) as Observable<Date>;
  }
  @ModelField()
  Address?: string;
  public $$Address() {
    return this.property<string>('Address');
  }
  public $Address() {
    return this.getAttribute<string>('Address') as string;
  }
  
  public Address$(options?: ODataQueryArgumentsOptions<string>) {
    return this.fetchAttribute<string>('Address', options) as Observable<string>;
  }
  @ModelField()
  City?: string;
  public $$City() {
    return this.property<string>('City');
  }
  public $City() {
    return this.getAttribute<string>('City') as string;
  }
  
  public City$(options?: ODataQueryArgumentsOptions<string>) {
    return this.fetchAttribute<string>('City', options) as Observable<string>;
  }
  @ModelField()
  Region?: string;
  public $$Region() {
    return this.property<string>('Region');
  }
  public $Region() {
    return this.getAttribute<string>('Region') as string;
  }
  
  public Region$(options?: ODataQueryArgumentsOptions<string>) {
    return this.fetchAttribute<string>('Region', options) as Observable<string>;
  }
  @ModelField()
  PostalCode?: string;
  public $$PostalCode() {
    return this.property<string>('PostalCode');
  }
  public $PostalCode() {
    return this.getAttribute<string>('PostalCode') as string;
  }
  
  public PostalCode$(options?: ODataQueryArgumentsOptions<string>) {
    return this.fetchAttribute<string>('PostalCode', options) as Observable<string>;
  }
  @ModelField()
  Country?: string;
  public $$Country() {
    return this.property<string>('Country');
  }
  public $Country() {
    return this.getAttribute<string>('Country') as string;
  }
  
  public Country$(options?: ODataQueryArgumentsOptions<string>) {
    return this.fetchAttribute<string>('Country', options) as Observable<string>;
  }
  @ModelField()
  HomePhone?: string;
  public $$HomePhone() {
    return this.property<string>('HomePhone');
  }
  public $HomePhone() {
    return this.getAttribute<string>('HomePhone') as string;
  }
  
  public HomePhone$(options?: ODataQueryArgumentsOptions<string>) {
    return this.fetchAttribute<string>('HomePhone', options) as Observable<string>;
  }
  @ModelField()
  Extension?: string;
  public $$Extension() {
    return this.property<string>('Extension');
  }
  public $Extension() {
    return this.getAttribute<string>('Extension') as string;
  }
  
  public Extension$(options?: ODataQueryArgumentsOptions<string>) {
    return this.fetchAttribute<string>('Extension', options) as Observable<string>;
  }
  @ModelField()
  Photo?: ArrayBuffer;
  public $$Photo() {
    return this.property<ArrayBuffer>('Photo');
  }
  public $Photo() {
    return this.getAttribute<ArrayBuffer>('Photo') as ArrayBuffer;
  }
  
  public Photo$(options?: ODataQueryArgumentsOptions<ArrayBuffer>) {
    return this.fetchAttribute<ArrayBuffer>('Photo', options) as Observable<ArrayBuffer>;
  }
  @ModelField()
  Notes?: string;
  public $$Notes() {
    return this.property<string>('Notes');
  }
  public $Notes() {
    return this.getAttribute<string>('Notes') as string;
  }
  
  public Notes$(options?: ODataQueryArgumentsOptions<string>) {
    return this.fetchAttribute<string>('Notes', options) as Observable<string>;
  }
  @ModelField()
  ReportsTo?: number;
  public $$ReportsTo() {
    return this.property<number>('ReportsTo');
  }
  public $ReportsTo() {
    return this.getAttribute<number>('ReportsTo') as number;
  }
  
  public ReportsTo$(options?: ODataQueryArgumentsOptions<number>) {
    return this.fetchAttribute<number>('ReportsTo', options) as Observable<number>;
  }
  @ModelField()
  PhotoPath?: string;
  public $$PhotoPath() {
    return this.property<string>('PhotoPath');
  }
  public $PhotoPath() {
    return this.getAttribute<string>('PhotoPath') as string;
  }
  
  public PhotoPath$(options?: ODataQueryArgumentsOptions<string>) {
    return this.fetchAttribute<string>('PhotoPath', options) as Observable<string>;
  }
  @ModelField()
  Employees1?: EmployeeCollection<Employee, EmployeeModel<Employee>>;
  public $$Employees1() {
    return this.navigationProperty<Employee>('Employees1');
  }
  public $Employees1() {
    return this.getAttribute<Employee>('Employees1') as EmployeeCollection<Employee, EmployeeModel<Employee>>;
  }
  public Employees1$$(model: EmployeeCollection<Employee, EmployeeModel<Employee>> | null, options?: ODataOptions) {
    return this.setReference<Employee>('Employees1', model, options);
  }
  public Employees1$(options?: ODataQueryArgumentsOptions<Employee>) {
      return this.fetchAttribute<Employee>('Employees1', options) as Observable<EmployeeCollection<Employee, EmployeeModel<Employee>>>;
    }
  @ModelField()
  Employee1?: EmployeeModel<Employee>;
  public $$Employee1() {
    return this.navigationProperty<Employee>('Employee1');
  }
  public $Employee1() {
    return this.getAttribute<Employee>('Employee1') as EmployeeModel<Employee>;
  }
  public Employee1$$(model: EmployeeModel<Employee> | null, options?: ODataOptions) {
    return this.setReference<Employee>('Employee1', model, options);
  }
  public Employee1$(options?: ODataQueryArgumentsOptions<Employee>) {
      return this.fetchAttribute<Employee>('Employee1', options) as Observable<EmployeeModel<Employee>>;
    }
  @ModelField()
  Orders?: OrderCollection<Order, OrderModel<Order>>;
  public $$Orders() {
    return this.navigationProperty<Order>('Orders');
  }
  public $Orders() {
    return this.getAttribute<Order>('Orders') as OrderCollection<Order, OrderModel<Order>>;
  }
  public Orders$$(model: OrderCollection<Order, OrderModel<Order>> | null, options?: ODataOptions) {
    return this.setReference<Order>('Orders', model, options);
  }
  public Orders$(options?: ODataQueryArgumentsOptions<Order>) {
      return this.fetchAttribute<Order>('Orders', options) as Observable<OrderCollection<Order, OrderModel<Order>>>;
    }
  @ModelField()
  Territories?: TerritoryCollection<Territory, TerritoryModel<Territory>>;
  public $$Territories() {
    return this.navigationProperty<Territory>('Territories');
  }
  public $Territories() {
    return this.getAttribute<Territory>('Territories') as TerritoryCollection<Territory, TerritoryModel<Territory>>;
  }
  public Territories$$(model: TerritoryCollection<Territory, TerritoryModel<Territory>> | null, options?: ODataOptions) {
    return this.setReference<Territory>('Territories', model, options);
  }
  public Territories$(options?: ODataQueryArgumentsOptions<Territory>) {
      return this.fetchAttribute<Territory>('Territories', options) as Observable<TerritoryCollection<Territory, TerritoryModel<Territory>>>;
    }
  //#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}