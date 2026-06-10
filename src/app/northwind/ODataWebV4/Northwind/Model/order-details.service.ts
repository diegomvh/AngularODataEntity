import { Injectable } from '@angular/core';
import { ODataClient, 
  ODataActionResource, 
  ODataActionOptions, 
  ODataFunctionResource, 
  ODataFunctionOptions, 
  ODataEntitySetService, 
  ODataOptions,
  EntityKey } from 'angular-odata';
import { OrderDetailModel } from '../../../NorthwindModel/order-detail.model';
import { OrderDetailCollection } from '../../../NorthwindModel/order-detail.collection';
import { OrderDetail } from '../../../NorthwindModel/order-detail.entity';

// #region Custom
// #endregion Custom
@Injectable()
export class OrderDetailsService extends ODataEntitySetService<OrderDetail> {
  constructor(client: ODataClient) {
    super(client, 'Order_Details', 'NorthwindModel.Order_Detail');
  }
  orderDetailModel(entity?: Partial<OrderDetail>) {
    return this.model<OrderDetailModel<OrderDetail>>(entity);
  }
  orderDetailCollection(entities?: Partial<OrderDetail>[]) {
    return this.collection<OrderDetailModel<OrderDetail>, OrderDetailCollection<OrderDetail, OrderDetailModel<OrderDetail>>>(entities);
  }
// #region Custom
// #endregion Custom
}
