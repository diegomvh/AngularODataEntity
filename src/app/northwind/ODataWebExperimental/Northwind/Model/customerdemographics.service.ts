import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
  HttpOptions} from 'angular-odata';

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
  }
  //#endregion
  //#region ODataApi Collection
  customerDemographicCollection(models?: Partial<CustomerDemographic>[]): CustomerDemographicCollection<CustomerDemographic, CustomerDemographicModel<CustomerDemographic>> {
    return this.entities().asCollection<CustomerDemographicModel<CustomerDemographic>, CustomerDemographicCollection<CustomerDemographic, CustomerDemographicModel<CustomerDemographic>>>(models || []);
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  public customers(entity: EntityKey<CustomerDemographic>): ODataNavigationPropertyResource<Customer> {
    return this.entity(entity).navigationProperty<Customer>('Customers');
  }
  //#endregion
}
