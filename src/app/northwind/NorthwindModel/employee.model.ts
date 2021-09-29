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
  public $EmployeeID() {
    return this.property<number>('EmployeeID');
  }
  public getEmployeeID(options?: ODataOptions) {
    return this.getValue<number>('EmployeeID', options) as Observable<number>;
  }
  
  @ModelField()
  LastName!: string;
  public $LastName() {
    return this.property<string>('LastName');
  }
  public getLastName(options?: ODataOptions) {
    return this.getValue<string>('LastName', options) as Observable<string>;
  }
  
  @ModelField()
  FirstName!: string;
  public $FirstName() {
    return this.property<string>('FirstName');
  }
  public getFirstName(options?: ODataOptions) {
    return this.getValue<string>('FirstName', options) as Observable<string>;
  }
  
  @ModelField()
  Title?: string;
  public $Title() {
    return this.property<string>('Title');
  }
  public getTitle(options?: ODataOptions) {
    return this.getValue<string>('Title', options) as Observable<string>;
  }
  
  @ModelField()
  TitleOfCourtesy?: string;
  public $TitleOfCourtesy() {
    return this.property<string>('TitleOfCourtesy');
  }
  public getTitleOfCourtesy(options?: ODataOptions) {
    return this.getValue<string>('TitleOfCourtesy', options) as Observable<string>;
  }
  
  @ModelField()
  BirthDate?: Date;
  public $BirthDate() {
    return this.property<Date>('BirthDate');
  }
  public getBirthDate(options?: ODataOptions) {
    return this.getValue<Date>('BirthDate', options) as Observable<Date>;
  }
  
  @ModelField()
  HireDate?: Date;
  public $HireDate() {
    return this.property<Date>('HireDate');
  }
  public getHireDate(options?: ODataOptions) {
    return this.getValue<Date>('HireDate', options) as Observable<Date>;
  }
  
  @ModelField()
  Address?: string;
  public $Address() {
    return this.property<string>('Address');
  }
  public getAddress(options?: ODataOptions) {
    return this.getValue<string>('Address', options) as Observable<string>;
  }
  
  @ModelField()
  City?: string;
  public $City() {
    return this.property<string>('City');
  }
  public getCity(options?: ODataOptions) {
    return this.getValue<string>('City', options) as Observable<string>;
  }
  
  @ModelField()
  Region?: string;
  public $Region() {
    return this.property<string>('Region');
  }
  public getRegion(options?: ODataOptions) {
    return this.getValue<string>('Region', options) as Observable<string>;
  }
  
  @ModelField()
  PostalCode?: string;
  public $PostalCode() {
    return this.property<string>('PostalCode');
  }
  public getPostalCode(options?: ODataOptions) {
    return this.getValue<string>('PostalCode', options) as Observable<string>;
  }
  
  @ModelField()
  Country?: string;
  public $Country() {
    return this.property<string>('Country');
  }
  public getCountry(options?: ODataOptions) {
    return this.getValue<string>('Country', options) as Observable<string>;
  }
  
  @ModelField()
  HomePhone?: string;
  public $HomePhone() {
    return this.property<string>('HomePhone');
  }
  public getHomePhone(options?: ODataOptions) {
    return this.getValue<string>('HomePhone', options) as Observable<string>;
  }
  
  @ModelField()
  Extension?: string;
  public $Extension() {
    return this.property<string>('Extension');
  }
  public getExtension(options?: ODataOptions) {
    return this.getValue<string>('Extension', options) as Observable<string>;
  }
  
  @ModelField()
  Photo?: ArrayBuffer;
  public $Photo() {
    return this.property<ArrayBuffer>('Photo');
  }
  public getPhoto(options?: ODataOptions) {
    return this.getValue<ArrayBuffer>('Photo', options) as Observable<ArrayBuffer>;
  }
  
  @ModelField()
  Notes?: string;
  public $Notes() {
    return this.property<string>('Notes');
  }
  public getNotes(options?: ODataOptions) {
    return this.getValue<string>('Notes', options) as Observable<string>;
  }
  
  @ModelField()
  ReportsTo?: number;
  public $ReportsTo() {
    return this.property<number>('ReportsTo');
  }
  public getReportsTo(options?: ODataOptions) {
    return this.getValue<number>('ReportsTo', options) as Observable<number>;
  }
  
  @ModelField()
  PhotoPath?: string;
  public $PhotoPath() {
    return this.property<string>('PhotoPath');
  }
  public getPhotoPath(options?: ODataOptions) {
    return this.getValue<string>('PhotoPath', options) as Observable<string>;
  }
  
  @ModelField()
  Employees1?: EmployeeCollection<Employee, EmployeeModel<Employee>>;
  public $Employees1() {
    return this.navigationProperty<Employee>('Employees1');
  }
  public getEmployees1() {
    return this.getReference<Employee>('Employees1') as EmployeeCollection<Employee, EmployeeModel<Employee>>;
  }
  public setEmployees1(model: EmployeeCollection<Employee, EmployeeModel<Employee>> | null, options?: ODataOptions) {
    return this.setReference<Employee>('Employees1', model, options);
  }
  @ModelField()
  Employee1?: EmployeeModel<Employee>;
  public $Employee1() {
    return this.navigationProperty<Employee>('Employee1');
  }
  public getEmployee1() {
    return this.getReference<Employee>('Employee1') as EmployeeModel<Employee>;
  }
  public setEmployee1(model: EmployeeModel<Employee> | null, options?: ODataOptions) {
    return this.setReference<Employee>('Employee1', model, options);
  }
  @ModelField()
  Orders?: OrderCollection<Order, OrderModel<Order>>;
  public $Orders() {
    return this.navigationProperty<Order>('Orders');
  }
  public getOrders() {
    return this.getReference<Order>('Orders') as OrderCollection<Order, OrderModel<Order>>;
  }
  public setOrders(model: OrderCollection<Order, OrderModel<Order>> | null, options?: ODataOptions) {
    return this.setReference<Order>('Orders', model, options);
  }
  @ModelField()
  Territories?: TerritoryCollection<Territory, TerritoryModel<Territory>>;
  public $Territories() {
    return this.navigationProperty<Territory>('Territories');
  }
  public getTerritories() {
    return this.getReference<Territory>('Territories') as TerritoryCollection<Territory, TerritoryModel<Territory>>;
  }
  public setTerritories(model: TerritoryCollection<Territory, TerritoryModel<Territory>> | null, options?: ODataOptions) {
    return this.setReference<Territory>('Territories', model, options);
  }
  //#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}