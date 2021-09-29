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
import { OrdersQry } from './orders_qry.entity';
import { OrdersQryCollection } from './orders_qry.collection';
//#endregion

@Model()
export class OrdersQryModel<E extends OrdersQry> extends ODataModel<E> {
  //#region ODataApiGen Properties
  @ModelField()
  OrderID!: number;
  public $OrderID() {
    return this.property<number>('OrderID');
  }
  public getOrderID(options?: ODataOptions) {
    return this.getValue<number>('OrderID', options) as Observable<number>;
  }
  
  @ModelField()
  CustomerID?: string;
  public $CustomerID() {
    return this.property<string>('CustomerID');
  }
  public getCustomerID(options?: ODataOptions) {
    return this.getValue<string>('CustomerID', options) as Observable<string>;
  }
  
  @ModelField()
  EmployeeID?: number;
  public $EmployeeID() {
    return this.property<number>('EmployeeID');
  }
  public getEmployeeID(options?: ODataOptions) {
    return this.getValue<number>('EmployeeID', options) as Observable<number>;
  }
  
  @ModelField()
  OrderDate?: Date;
  public $OrderDate() {
    return this.property<Date>('OrderDate');
  }
  public getOrderDate(options?: ODataOptions) {
    return this.getValue<Date>('OrderDate', options) as Observable<Date>;
  }
  
  @ModelField()
  RequiredDate?: Date;
  public $RequiredDate() {
    return this.property<Date>('RequiredDate');
  }
  public getRequiredDate(options?: ODataOptions) {
    return this.getValue<Date>('RequiredDate', options) as Observable<Date>;
  }
  
  @ModelField()
  ShippedDate?: Date;
  public $ShippedDate() {
    return this.property<Date>('ShippedDate');
  }
  public getShippedDate(options?: ODataOptions) {
    return this.getValue<Date>('ShippedDate', options) as Observable<Date>;
  }
  
  @ModelField()
  ShipVia?: number;
  public $ShipVia() {
    return this.property<number>('ShipVia');
  }
  public getShipVia(options?: ODataOptions) {
    return this.getValue<number>('ShipVia', options) as Observable<number>;
  }
  
  @ModelField()
  Freight?: number;
  public $Freight() {
    return this.property<number>('Freight');
  }
  public getFreight(options?: ODataOptions) {
    return this.getValue<number>('Freight', options) as Observable<number>;
  }
  
  @ModelField()
  ShipName?: string;
  public $ShipName() {
    return this.property<string>('ShipName');
  }
  public getShipName(options?: ODataOptions) {
    return this.getValue<string>('ShipName', options) as Observable<string>;
  }
  
  @ModelField()
  ShipAddress?: string;
  public $ShipAddress() {
    return this.property<string>('ShipAddress');
  }
  public getShipAddress(options?: ODataOptions) {
    return this.getValue<string>('ShipAddress', options) as Observable<string>;
  }
  
  @ModelField()
  ShipCity?: string;
  public $ShipCity() {
    return this.property<string>('ShipCity');
  }
  public getShipCity(options?: ODataOptions) {
    return this.getValue<string>('ShipCity', options) as Observable<string>;
  }
  
  @ModelField()
  ShipRegion?: string;
  public $ShipRegion() {
    return this.property<string>('ShipRegion');
  }
  public getShipRegion(options?: ODataOptions) {
    return this.getValue<string>('ShipRegion', options) as Observable<string>;
  }
  
  @ModelField()
  ShipPostalCode?: string;
  public $ShipPostalCode() {
    return this.property<string>('ShipPostalCode');
  }
  public getShipPostalCode(options?: ODataOptions) {
    return this.getValue<string>('ShipPostalCode', options) as Observable<string>;
  }
  
  @ModelField()
  ShipCountry?: string;
  public $ShipCountry() {
    return this.property<string>('ShipCountry');
  }
  public getShipCountry(options?: ODataOptions) {
    return this.getValue<string>('ShipCountry', options) as Observable<string>;
  }
  
  @ModelField()
  CompanyName!: string;
  public $CompanyName() {
    return this.property<string>('CompanyName');
  }
  public getCompanyName(options?: ODataOptions) {
    return this.getValue<string>('CompanyName', options) as Observable<string>;
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
  
  //#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}