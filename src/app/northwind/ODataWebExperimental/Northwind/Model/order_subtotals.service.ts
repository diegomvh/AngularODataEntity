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
import { OrderSubtotal } from '../../../NorthwindModel/order_subtotal.entity';
import { OrderSubtotalModel } from '../../../NorthwindModel/order_subtotal.model';
import { OrderSubtotalCollection } from '../../../NorthwindModel/order_subtotal.collection';
//#endregion

@Injectable()
export class OrderSubtotalsService extends ODataEntitySetService<OrderSubtotal> {
  constructor(protected client: ODataClient) {
    super(client, 'Order_Subtotals', 'NorthwindModel.Order_Subtotal');
  }
  //#region ODataApiGen Model
  orderSubtotalModel(attrs?: Partial<OrderSubtotal>): OrderSubtotalModel<OrderSubtotal> {
    return this.entity().asModel<OrderSubtotalModel<OrderSubtotal>>(attrs || {});
  }//#endregion
  //#region ODataApiGen Collection
  orderSubtotalCollection(models?: Partial<OrderSubtotal>[]): OrderSubtotalCollection<OrderSubtotal, OrderSubtotalModel<OrderSubtotal>> {
    return this.entities().asCollection<OrderSubtotalModel<OrderSubtotal>, OrderSubtotalCollection<OrderSubtotal, OrderSubtotalModel<OrderSubtotal>>>(models || []);
  }//#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}
