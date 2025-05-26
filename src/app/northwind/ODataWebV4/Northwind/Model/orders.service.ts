import { Injectable } from '@angular/core';
import { ODataClient, 
  ODataActionResource, 
  ODataActionOptions, 
  ODataFunctionResource, 
  ODataFunctionOptions, 
  ODataEntitySetService, 
  ODataOptions,
  EntityKey } from 'angular-odata';
import { Order } from '../../../NorthwindModel/order.entity';

@Injectable()
export class OrdersService extends ODataEntitySetService<Order> {
  constructor(client: ODataClient) {
    super(client, 'Orders', 'NorthwindModel.Order');
  }
  orderModel(entity?: Partial<Order>) {
    return this.model(entity);
  }
  orderCollection(entities?: Partial<Order>[]) {
    return this.collection(entities);
  }
}
