import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ODataEntityService, ODataEntityAnnotations, ODataEntitiesAnnotations, EntityKey, ODataValueAnnotations, ODataEntityResource, ODataEntitySetResource, ODataNavigationPropertyResource, HttpOptions } from 'angular-odata';

//#region ODataApi Imports
import { Orders_Qry } from '../../../NorthwindModel/orders_qry.entity';
//#endregion

@Injectable()
export class Orders_QriesService extends ODataEntityService<Orders_Qry> {
  static path: string = 'Orders_Qries';
  static type: string = 'ODataWebExperimental.Northwind.Model.Orders_Qries';
  static entity: string = 'NorthwindModel.Orders_Qry';

  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
