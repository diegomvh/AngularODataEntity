import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ODataEntityService, ODataEntityAnnotations, ODataEntitiesAnnotations, EntityKey, ODataValueAnnotations, ODataEntityResource, ODataEntitySetResource, ODataNavigationPropertyResource, HttpOptions } from 'angular-odata';

//#region ODataApi Imports
import { Order_Subtotal } from '../../../NorthwindModel/order_subtotal.entity';
//#endregion

@Injectable()
export class Order_SubtotalsService extends ODataEntityService<Order_Subtotal> {
  static path: string = 'Order_Subtotals';
  static type: string = 'ODataWebExperimental.Northwind.Model.Order_Subtotals';
  static entity: string = 'NorthwindModel.Order_Subtotal';

  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
