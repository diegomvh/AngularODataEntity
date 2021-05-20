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
import { OrderSubtotal } from '../../../NorthwindModel/order_subtotal.entity';
import { OrderSubtotalModel } from '../../../NorthwindModel/order_subtotal.model';
import { OrderSubtotalCollection } from '../../../NorthwindModel/order_subtotal.collection';
//#endregion

@Injectable()
export class OrderSubtotalsService extends ODataEntitySetService<OrderSubtotal> {
  constructor(protected client: ODataClient) {
    super(client, 'Order_Subtotals', 'NorthwindModel.Order_Subtotal');
  }

  //#region ODataApi Model
  orderSubtotalModel(attrs?: Partial<OrderSubtotal>): OrderSubtotalModel<OrderSubtotal> {
    return this.entity().asModel<OrderSubtotalModel<OrderSubtotal>>(attrs || {});
  }
  //#endregion
  //#region ODataApi Collection
  orderSubtotalCollection(models?: Partial<OrderSubtotal>[]): OrderSubtotalCollection<OrderSubtotal, OrderSubtotalModel<OrderSubtotal>> {
    return this.entities().asCollection<OrderSubtotalModel<OrderSubtotal>, OrderSubtotalCollection<OrderSubtotal, OrderSubtotalModel<OrderSubtotal>>>(models || []);
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
