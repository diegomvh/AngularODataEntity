import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ODataEntityService, ODataEntityAnnotations, ODataEntitiesAnnotations, EntityKey, ODataValueAnnotations, ODataEntityResource, ODataEntitySetResource, ODataNavigationPropertyResource, HttpOptions } from 'angular-odata';

//#region ODataApi Imports
import { Order_Details_Extended } from '../../../NorthwindModel/order_details_extended.entity';
//#endregion

@Injectable()
export class Order_Details_ExtendedsService extends ODataEntityService<Order_Details_Extended> {
  static path: string = 'Order_Details_Extendeds';
  static type: string = 'ODataWebExperimental.Northwind.Model.Order_Details_Extendeds';
  static entity: string = 'NorthwindModel.Order_Details_Extended';

  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
