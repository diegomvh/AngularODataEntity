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
  //#region ODataApi Properties
  @ModelField()
  CustomerID!: string;
  
  
  @ModelField()
  CompanyName!: string;
  
  
  @ModelField()
  ContactName?: string;
  
  
  @ModelField()
  ContactTitle?: string;
  
  
  @ModelField()
  Address?: string;
  
  
  @ModelField()
  City?: string;
  
  
  @ModelField()
  Region?: string;
  
  
  @ModelField()
  PostalCode?: string;
  
  
  @ModelField()
  Country?: string;
  
  
  @ModelField()
  Phone?: string;
  
  
  @ModelField()
  Fax?: string;
  
  
  @ModelField()
  Orders?: OrderCollection<Order, OrderModel<Order>>;
  public getOrders({asEntity, ...options}: {asEntity?: boolean} & HttpQueryOptions<Order> = {}) {
    return this.getReference<Order>('Orders', {asEntity, ...options}) as Observable<OrderCollection<Order, OrderModel<Order>>>;
  }
  public setOrders(model: OrderCollection<Order, OrderModel<Order>> | null, {asEntity, ...options}: {asEntity?: boolean} & HttpOptions = {}) {
    return this.setReference<Order>('Orders', model, {asEntity, ...options});
  }
  @ModelField()
  CustomerDemographics?: CustomerDemographicCollection<CustomerDemographic, CustomerDemographicModel<CustomerDemographic>>;
  public getCustomerDemographics({asEntity, ...options}: {asEntity?: boolean} & HttpQueryOptions<CustomerDemographic> = {}) {
    return this.getReference<CustomerDemographic>('CustomerDemographics', {asEntity, ...options}) as Observable<CustomerDemographicCollection<CustomerDemographic, CustomerDemographicModel<CustomerDemographic>>>;
  }
  public setCustomerDemographics(model: CustomerDemographicCollection<CustomerDemographic, CustomerDemographicModel<CustomerDemographic>> | null, {asEntity, ...options}: {asEntity?: boolean} & HttpOptions = {}) {
    return this.setReference<CustomerDemographic>('CustomerDemographics', model, {asEntity, ...options});
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}