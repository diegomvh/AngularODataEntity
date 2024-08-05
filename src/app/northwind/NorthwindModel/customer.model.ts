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
import { CustomerDemographic } from './customer-demographic.entity';
import { Customer } from './customer.entity';
import { Order } from './order.entity';
import { CustomerDemographicModel } from './customer-demographic.model';
import { OrderModel } from './order.model';
import { CustomerDemographicCollection } from './customer-demographic.collection';
import { CustomerCollection } from './customer.collection';
import { OrderCollection } from './order.collection';
//#endregion

@Model()
export class CustomerModel<E extends Customer> extends ODataModel<E> {
  //#region ODataApiGen Properties
  @ModelField()
  CustomerID!: string;
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
  CompanyName?: string;
  public $$CompanyName() {
    return this.property<string>('CompanyName');
  }
  public $CompanyName() {
    return this.getAttribute<string>('CompanyName') as string;
  }
  
  public CompanyName$(options?: ODataQueryArgumentsOptions<string>) {
    return this.fetchAttribute<string>('CompanyName', options) as Observable<string>;
  }
  @ModelField()
  ContactName?: string;
  public $$ContactName() {
    return this.property<string>('ContactName');
  }
  public $ContactName() {
    return this.getAttribute<string>('ContactName') as string;
  }
  
  public ContactName$(options?: ODataQueryArgumentsOptions<string>) {
    return this.fetchAttribute<string>('ContactName', options) as Observable<string>;
  }
  @ModelField()
  ContactTitle?: string;
  public $$ContactTitle() {
    return this.property<string>('ContactTitle');
  }
  public $ContactTitle() {
    return this.getAttribute<string>('ContactTitle') as string;
  }
  
  public ContactTitle$(options?: ODataQueryArgumentsOptions<string>) {
    return this.fetchAttribute<string>('ContactTitle', options) as Observable<string>;
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
  Phone?: string;
  public $$Phone() {
    return this.property<string>('Phone');
  }
  public $Phone() {
    return this.getAttribute<string>('Phone') as string;
  }
  
  public Phone$(options?: ODataQueryArgumentsOptions<string>) {
    return this.fetchAttribute<string>('Phone', options) as Observable<string>;
  }
  @ModelField()
  Fax?: string;
  public $$Fax() {
    return this.property<string>('Fax');
  }
  public $Fax() {
    return this.getAttribute<string>('Fax') as string;
  }
  
  public Fax$(options?: ODataQueryArgumentsOptions<string>) {
    return this.fetchAttribute<string>('Fax', options) as Observable<string>;
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
  CustomerDemographics?: CustomerDemographicCollection<CustomerDemographic, CustomerDemographicModel<CustomerDemographic>>;
  public $$CustomerDemographics() {
    return this.navigationProperty<CustomerDemographic>('CustomerDemographics');
  }
  public $CustomerDemographics() {
    return this.getAttribute<CustomerDemographic>('CustomerDemographics') as CustomerDemographicCollection<CustomerDemographic, CustomerDemographicModel<CustomerDemographic>>;
  }
  public CustomerDemographics$$(model: CustomerDemographicCollection<CustomerDemographic, CustomerDemographicModel<CustomerDemographic>> | null, options?: ODataOptions) {
    return this.setReference<CustomerDemographic>('CustomerDemographics', model, options);
  }
  public CustomerDemographics$(options?: ODataQueryArgumentsOptions<CustomerDemographic>) {
      return this.fetchAttribute<CustomerDemographic>('CustomerDemographics', options) as Observable<CustomerDemographicCollection<CustomerDemographic, CustomerDemographicModel<CustomerDemographic>>>;
    }
  //#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}