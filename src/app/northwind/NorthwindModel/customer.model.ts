import { Model, ModelField, ODataModel, ODataCollection, HttpOptions, Duration, Expand, Select } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
  
  
  @ModelField()
  CustomerDemographics?: CustomerDemographicCollection<CustomerDemographic, CustomerDemographicModel<CustomerDemographic>>;
  
  
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}