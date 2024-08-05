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
import { OrderSubtotal } from '../../../NorthwindModel/order-subtotal.entity';
import { OrderSubtotalModel } from '../../../NorthwindModel/order-subtotal.model';
import { OrderSubtotalCollection } from '../../../NorthwindModel/order-subtotal.collection';
//#endregion

@Injectable()
export class OrderSubtotalsService extends ODataEntitySetService<OrderSubtotal> {
  constructor(client: ODataClient) {
    super(client, 'Order_Subtotals', 'NorthwindModel.Order_Subtotal');
  }
  //#region ODataApiGen Model
  orderSubtotalModel(entity?: Partial<OrderSubtotal>): OrderSubtotalModel<OrderSubtotal> {
    return this.entity().asModel<OrderSubtotalModel<OrderSubtotal>>(entity);
  }//#endregion
  //#region ODataApiGen Collection
  orderSubtotalCollection(entities?: Partial<OrderSubtotal>[]): OrderSubtotalCollection<OrderSubtotal, OrderSubtotalModel<OrderSubtotal>> {
    return this.entities().asCollection<OrderSubtotalModel<OrderSubtotal>, OrderSubtotalCollection<OrderSubtotal, OrderSubtotalModel<OrderSubtotal>>>(entities);
  }//#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}
