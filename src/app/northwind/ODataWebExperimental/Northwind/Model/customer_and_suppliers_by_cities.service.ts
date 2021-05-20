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
import { CustomerAndSuppliersByCity } from '../../../NorthwindModel/customer_and_suppliers_by_city.entity';
import { CustomerAndSuppliersByCityModel } from '../../../NorthwindModel/customer_and_suppliers_by_city.model';
import { CustomerAndSuppliersByCityCollection } from '../../../NorthwindModel/customer_and_suppliers_by_city.collection';
//#endregion

@Injectable()
export class CustomerAndSuppliersByCitiesService extends ODataEntitySetService<CustomerAndSuppliersByCity> {
  constructor(protected client: ODataClient) {
    super(client, 'Customer_and_Suppliers_by_Cities', 'NorthwindModel.Customer_and_Suppliers_by_City');
  }

  //#region ODataApi Model
  customerAndSuppliersByCityModel(attrs?: Partial<CustomerAndSuppliersByCity>): CustomerAndSuppliersByCityModel<CustomerAndSuppliersByCity> {
    return this.entity().asModel<CustomerAndSuppliersByCityModel<CustomerAndSuppliersByCity>>(attrs || {});
  }
  //#endregion
  //#region ODataApi Collection
  customerAndSuppliersByCityCollection(models?: Partial<CustomerAndSuppliersByCity>[]): CustomerAndSuppliersByCityCollection<CustomerAndSuppliersByCity, CustomerAndSuppliersByCityModel<CustomerAndSuppliersByCity>> {
    return this.entities().asCollection<CustomerAndSuppliersByCityModel<CustomerAndSuppliersByCity>, CustomerAndSuppliersByCityCollection<CustomerAndSuppliersByCity, CustomerAndSuppliersByCityModel<CustomerAndSuppliersByCity>>>(models || []);
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
