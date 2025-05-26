import { Injectable } from '@angular/core';
import { ODataClient, 
  ODataActionResource, 
  ODataActionOptions, 
  ODataFunctionResource, 
  ODataFunctionOptions, 
  ODataEntitySetService, 
  ODataOptions,
  EntityKey } from 'angular-odata';
import { OrderSubtotal } from '../../../NorthwindModel/order-subtotal.entity';

@Injectable()
export class OrderSubtotalsService extends ODataEntitySetService<OrderSubtotal> {
  constructor(client: ODataClient) {
    super(client, 'Order_Subtotals', 'NorthwindModel.Order_Subtotal');
  }
  orderSubtotalModel(entity?: Partial<OrderSubtotal>) {
    return this.model(entity);
  }
  orderSubtotalCollection(entities?: Partial<OrderSubtotal>[]) {
    return this.collection(entities);
  }
}
