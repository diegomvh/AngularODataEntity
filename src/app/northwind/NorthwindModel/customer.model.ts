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
import { CustomerDemographic } from './customerdemographic.entity';
import { Customer } from './customer.entity';
import { Order } from './order.entity';
import { CustomerDemographicModel } from './customerdemographic.model';
import { OrderModel } from './order.model';
import { CustomerDemographicCollection } from './customerdemographic.collection';
import { CustomerCollection } from './customer.collection';
import { OrderCollection } from './order.collection';
//#endregion

@Model()
export class CustomerModel<E extends Customer> extends ODataModel<E> {
  //#region ODataApiGen Properties
  @ModelField()
  CustomerID!: string;
  public $CustomerID() {
    return this.property<string>('CustomerID');
  }
  public getCustomerID(options?: ODataOptions) {
    return this.getValue<string>('CustomerID', options) as Observable<string>;
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
  ContactName?: string;
  public $ContactName() {
    return this.property<string>('ContactName');
  }
  public getContactName(options?: ODataOptions) {
    return this.getValue<string>('ContactName', options) as Observable<string>;
  }
  
  @ModelField()
  ContactTitle?: string;
  public $ContactTitle() {
    return this.property<string>('ContactTitle');
  }
  public getContactTitle(options?: ODataOptions) {
    return this.getValue<string>('ContactTitle', options) as Observable<string>;
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
  Phone?: string;
  public $Phone() {
    return this.property<string>('Phone');
  }
  public getPhone(options?: ODataOptions) {
    return this.getValue<string>('Phone', options) as Observable<string>;
  }
  
  @ModelField()
  Fax?: string;
  public $Fax() {
    return this.property<string>('Fax');
  }
  public getFax(options?: ODataOptions) {
    return this.getValue<string>('Fax', options) as Observable<string>;
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
  CustomerDemographics?: CustomerDemographicCollection<CustomerDemographic, CustomerDemographicModel<CustomerDemographic>>;
  public $CustomerDemographics() {
    return this.navigationProperty<CustomerDemographic>('CustomerDemographics');
  }
  public getCustomerDemographics() {
    return this.getReference<CustomerDemographic>('CustomerDemographics') as CustomerDemographicCollection<CustomerDemographic, CustomerDemographicModel<CustomerDemographic>>;
  }
  public setCustomerDemographics(model: CustomerDemographicCollection<CustomerDemographic, CustomerDemographicModel<CustomerDemographic>> | null, options?: ODataOptions) {
    return this.setReference<CustomerDemographic>('CustomerDemographics', model, options);
  }
  //#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}