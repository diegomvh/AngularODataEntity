import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ODataEntityService, ODataEntityAnnotations, ODataEntitiesAnnotations, EntityKey, ODataValueAnnotations, ODataEntityResource, ODataEntitySetResource, ODataNavigationPropertyResource, HttpOptions } from 'angular-odata';

//#region ODataApi Imports
import { Customer_and_Suppliers_by_City } from '../../../NorthwindModel/customer_and_suppliers_by_city.entity';
//#endregion

@Injectable()
export class Customer_and_Suppliers_by_CitiesService extends ODataEntityService<Customer_and_Suppliers_by_City> {
  static path: string = 'Customer_and_Suppliers_by_Cities';
  static type: string = 'ODataWebExperimental.Northwind.Model.Customer_and_Suppliers_by_Cities';
  static entity: string = 'NorthwindModel.Customer_and_Suppliers_by_City';

  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
