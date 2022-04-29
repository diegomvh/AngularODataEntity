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
import { CustomerAndSuppliersByCity } from '../../../NorthwindModel/customer_and_suppliers_by_city.entity';
import { CustomerAndSuppliersByCityModel } from '../../../NorthwindModel/customer_and_suppliers_by_city.model';
import { CustomerAndSuppliersByCityCollection } from '../../../NorthwindModel/customer_and_suppliers_by_city.collection';
//#endregion

@Injectable()
export class CustomerAndSuppliersByCitiesService extends ODataEntitySetService<CustomerAndSuppliersByCity> {
  constructor(client: ODataClient) {
    super(client, 'Customer_and_Suppliers_by_Cities', 'NorthwindModel.Customer_and_Suppliers_by_City');
  }
  //#region ODataApiGen Model
  customerAndSuppliersByCityModel(attrs?: Partial<CustomerAndSuppliersByCity>): CustomerAndSuppliersByCityModel<CustomerAndSuppliersByCity> {
    return this.entity().asModel<CustomerAndSuppliersByCityModel<CustomerAndSuppliersByCity>>(attrs || {});
  }//#endregion
  //#region ODataApiGen Collection
  customerAndSuppliersByCityCollection(models?: Partial<CustomerAndSuppliersByCity>[]): CustomerAndSuppliersByCityCollection<CustomerAndSuppliersByCity, CustomerAndSuppliersByCityModel<CustomerAndSuppliersByCity>> {
    return this.entities().asCollection<CustomerAndSuppliersByCityModel<CustomerAndSuppliersByCity>, CustomerAndSuppliersByCityCollection<CustomerAndSuppliersByCity, CustomerAndSuppliersByCityModel<CustomerAndSuppliersByCity>>>(models || []);
  }//#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}
