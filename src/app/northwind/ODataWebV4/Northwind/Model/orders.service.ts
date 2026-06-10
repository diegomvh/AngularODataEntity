import { Injectable } from '@angular/core';
import { ODataClient, 
  ODataActionResource, 
  ODataActionOptions, 
  ODataFunctionResource, 
  ODataFunctionOptions, 
  ODataEntitySetService, 
  ODataOptions,
  EntityKey } from 'angular-odata';
import { OrderModel } from '../../../NorthwindModel/order.model';
import { OrderCollection } from '../../../NorthwindModel/order.collection';
import { Order } from '../../../NorthwindModel/order.entity';

// #region Custom
// #endregion Custom
@Injectable()
export class OrdersService extends ODataEntitySetService<Order> {
  constructor(client: ODataClient) {
    super(client, 'Orders', 'NorthwindModel.Order');
  }
  orderModel(entity?: Partial<Order>) {
    return this.model<OrderModel<Order>>(entity);
  }
  orderCollection(entities?: Partial<Order>[]) {
    return this.collection<OrderModel<Order>, OrderCollection<Order, OrderModel<Order>>>(entities);
  }
// #region Custom
// #endregion Custom
}
