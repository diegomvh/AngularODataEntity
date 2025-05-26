import { Injectable } from '@angular/core';
import { ODataClient, 
  ODataActionResource, 
  ODataActionOptions, 
  ODataFunctionResource, 
  ODataFunctionOptions, 
  ODataEntitySetService, 
  ODataOptions,
  EntityKey } from 'angular-odata';
import { OrderDetail } from '../../../NorthwindModel/order-detail.entity';

@Injectable()
export class OrderDetailsService extends ODataEntitySetService<OrderDetail> {
  constructor(client: ODataClient) {
    super(client, 'Order_Details', 'NorthwindModel.Order_Detail');
  }
  orderDetailModel(entity?: Partial<OrderDetail>) {
    return this.model(entity);
  }
  orderDetailCollection(entities?: Partial<OrderDetail>[]) {
    return this.collection(entities);
  }
}
