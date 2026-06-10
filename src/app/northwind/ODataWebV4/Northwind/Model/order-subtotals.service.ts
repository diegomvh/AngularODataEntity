import { Injectable } from '@angular/core';
import { ODataClient, 
  ODataActionResource, 
  ODataActionOptions, 
  ODataFunctionResource, 
  ODataFunctionOptions, 
  ODataEntitySetService, 
  ODataOptions,
  EntityKey } from 'angular-odata';
import { OrderSubtotalModel } from '../../../NorthwindModel/order-subtotal.model';
import { OrderSubtotalCollection } from '../../../NorthwindModel/order-subtotal.collection';
import { OrderSubtotal } from '../../../NorthwindModel/order-subtotal.entity';

// #region Custom
// #endregion Custom
@Injectable()
export class OrderSubtotalsService extends ODataEntitySetService<OrderSubtotal> {
  constructor(client: ODataClient) {
    super(client, 'Order_Subtotals', 'NorthwindModel.Order_Subtotal');
  }
  orderSubtotalModel(entity?: Partial<OrderSubtotal>) {
    return this.model<OrderSubtotalModel<OrderSubtotal>>(entity);
  }
  orderSubtotalCollection(entities?: Partial<OrderSubtotal>[]) {
    return this.collection<OrderSubtotalModel<OrderSubtotal>, OrderSubtotalCollection<OrderSubtotal, OrderSubtotalModel<OrderSubtotal>>>(entities);
  }
// #region Custom
// #endregion Custom
}
