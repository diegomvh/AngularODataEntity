import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApiGen ODataImports
import {
  ODataClient,
  ODataEntitySetService,
  ODataEntity,
  ODataEntities,
  ODataProperty,
  EntityKey,
  Duration,
  ODataEntityResource,
  ODataEntitySetResource,
  ODataNavigationPropertyResource,
  ODataActionResource,
  ODataFunctionResource,
  ODataOptions,
  ODataQueryArgumentsOptions
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { CustomerDemographic } from '../../../NorthwindModel/customerdemographic.entity';
import { Customer } from '../../../NorthwindModel/customer.entity';
import { Order } from '../../../NorthwindModel/order.entity';
import { CustomerDemographicModel } from '../../../NorthwindModel/customerdemographic.model';
import { CustomerModel } from '../../../NorthwindModel/customer.model';
import { OrderModel } from '../../../NorthwindModel/order.model';
import { CustomerDemographicCollection } from '../../../NorthwindModel/customerdemographic.collection';
import { CustomerCollection } from '../../../NorthwindModel/customer.collection';
import { OrderCollection } from '../../../NorthwindModel/order.collection';
//#endregion

@Injectable()
export class CustomersService extends ODataEntitySetService<Customer> {
  constructor(client: ODataClient) {
    super(client, 'Customers', 'NorthwindModel.Customer');
  }
  //#region ODataApiGen Model
  customerModel(attrs?: Partial<Customer>): CustomerModel<Customer> {
    return this.entity().asModel<CustomerModel<Customer>>(attrs || {});
  }//#endregion
  //#region ODataApiGen Collection
  customerCollection(models?: Partial<Customer>[]): CustomerCollection<Customer, CustomerModel<Customer>> {
    return this.entities().asCollection<CustomerModel<Customer>, CustomerCollection<Customer, CustomerModel<Customer>>>(models || []);
  }//#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  public customerDemographics(key: EntityKey<Customer>): ODataNavigationPropertyResource<CustomerDemographic> { 
    return this.entity(key).navigationProperty<CustomerDemographic>('CustomerDemographics'); 
  }
  public fetchCustomerDemographics(key: EntityKey<Customer>, options?: ODataQueryArgumentsOptions<CustomerDemographic>) {
    return this.fetchNavigationProperty<CustomerDemographic>(
      this.customerDemographics(key), 
      'entities', options) as Observable<ODataEntities<CustomerDemographic>>;
  }
  public addCustomerDemographicToCustomerDemographics(key: EntityKey<Customer>, target: ODataEntityResource<ODataEntities<CustomerDemographic>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.customerDemographics(key).reference()
      .add(target);
  }
  public removeCustomerDemographicFromCustomerDemographics(key: EntityKey<Customer>, {target, etag}: {target?: ODataEntityResource<ODataEntities<CustomerDemographic>>, etag?: string} = {}): Observable<any> {
    return this.customerDemographics(key).reference()
      .remove(target);
  }
  public orders(key: EntityKey<Customer>): ODataNavigationPropertyResource<Order> { 
    return this.entity(key).navigationProperty<Order>('Orders'); 
  }
  public fetchOrders(key: EntityKey<Customer>, options?: ODataQueryArgumentsOptions<Order>) {
    return this.fetchNavigationProperty<Order>(
      this.orders(key), 
      'entities', options) as Observable<ODataEntities<Order>>;
  }
  public addOrderToOrders(key: EntityKey<Customer>, target: ODataEntityResource<ODataEntities<Order>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.orders(key).reference()
      .add(target);
  }
  public removeOrderFromOrders(key: EntityKey<Customer>, {target, etag}: {target?: ODataEntityResource<ODataEntities<Order>>, etag?: string} = {}): Observable<any> {
    return this.orders(key).reference()
      .remove(target);
  }
  //#endregion
}
