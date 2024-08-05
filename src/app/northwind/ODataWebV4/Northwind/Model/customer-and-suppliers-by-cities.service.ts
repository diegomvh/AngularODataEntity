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
  ODataQueryArgumentsOptions,
  ODataFunctionOptions,
  ODataActionOptions
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { CustomerAndSuppliersByCity } from '../../../NorthwindModel/customer-and-suppliers-by-city.entity';
import { CustomerAndSuppliersByCityModel } from '../../../NorthwindModel/customer-and-suppliers-by-city.model';
import { CustomerAndSuppliersByCityCollection } from '../../../NorthwindModel/customer-and-suppliers-by-city.collection';
//#endregion

@Injectable()
export class CustomerAndSuppliersByCitiesService extends ODataEntitySetService<CustomerAndSuppliersByCity> {
  constructor(client: ODataClient) {
    super(client, 'Customer_and_Suppliers_by_Cities', 'NorthwindModel.Customer_and_Suppliers_by_City');
  }
  //#region ODataApiGen Model
  customerAndSuppliersByCityModel(entity?: Partial<CustomerAndSuppliersByCity>): CustomerAndSuppliersByCityModel<CustomerAndSuppliersByCity> {
    return this.entity().asModel<CustomerAndSuppliersByCityModel<CustomerAndSuppliersByCity>>(entity);
  }//#endregion
  //#region ODataApiGen Collection
  customerAndSuppliersByCityCollection(entities?: Partial<CustomerAndSuppliersByCity>[]): CustomerAndSuppliersByCityCollection<CustomerAndSuppliersByCity, CustomerAndSuppliersByCityModel<CustomerAndSuppliersByCity>> {
    return this.entities().asCollection<CustomerAndSuppliersByCityModel<CustomerAndSuppliersByCity>, CustomerAndSuppliersByCityCollection<CustomerAndSuppliersByCity, CustomerAndSuppliersByCityModel<CustomerAndSuppliersByCity>>>(entities);
  }//#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}
