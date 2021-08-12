import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region AngularOData Imports
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
  Expand, 
  Select,
  HttpOptions,
  HttpQueryOptions
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { CustomerDemographic } from '../../../NorthwindModel/customerdemographic.entity';
import { Customer } from '../../../NorthwindModel/customer.entity';
import { CustomerDemographicModel } from '../../../NorthwindModel/customerdemographic.model';
import { CustomerModel } from '../../../NorthwindModel/customer.model';
import { CustomerDemographicCollection } from '../../../NorthwindModel/customerdemographic.collection';
import { CustomerCollection } from '../../../NorthwindModel/customer.collection';
//#endregion

@Injectable()
export class CustomerDemographicsService extends ODataEntitySetService<CustomerDemographic> {
  constructor(protected client: ODataClient) {
    super(client, 'CustomerDemographics', 'NorthwindModel.CustomerDemographic');
  }
  //#region ODataApi Model
  customerDemographicModel(attrs?: Partial<CustomerDemographic>): CustomerDemographicModel<CustomerDemographic> {
    return this.entity().asModel<CustomerDemographicModel<CustomerDemographic>>(attrs || {});
  }//#endregion
  //#region ODataApi Collection
  customerDemographicCollection(models?: Partial<CustomerDemographic>[]): CustomerDemographicCollection<CustomerDemographic, CustomerDemographicModel<CustomerDemographic>> {
    return this.entities().asCollection<CustomerDemographicModel<CustomerDemographic>, CustomerDemographicCollection<CustomerDemographic, CustomerDemographicModel<CustomerDemographic>>>(models || []);
  }//#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  public customers(key: EntityKey<CustomerDemographic>): ODataNavigationPropertyResource<Customer> { 
    return this.entity(key).navigationProperty<Customer>('Customers'); 
  }
  public fetchCustomers(key: EntityKey<CustomerDemographic>, options?: HttpQueryOptions<Customer>) {
    return this.fetchNavigationProperty<Customer>(
      this.customers(key), 
      'entities', options) as Observable<ODataEntities<Customer>>;
  }
  public addCustomerToCustomers(key: EntityKey<CustomerDemographic>, target: ODataEntityResource<ODataEntities<Customer>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.customers(key).reference()
      .add(target);
  }
  public removeCustomerFromCustomers(key: EntityKey<CustomerDemographic>, {target, etag}: {target?: ODataEntityResource<ODataEntities<Customer>>, etag?: string} = {}): Observable<any> {
    return this.customers(key).reference()
      .remove(target);
  }
  //#endregion
}
