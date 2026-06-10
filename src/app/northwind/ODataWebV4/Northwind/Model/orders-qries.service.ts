import { Injectable } from '@angular/core';
import { ODataClient, 
  ODataActionResource, 
  ODataActionOptions, 
  ODataFunctionResource, 
  ODataFunctionOptions, 
  ODataEntitySetService, 
  ODataOptions,
  EntityKey } from 'angular-odata';
import { OrdersQryModel } from '../../../NorthwindModel/orders-qry.model';
import { OrdersQryCollection } from '../../../NorthwindModel/orders-qry.collection';
import { OrdersQry } from '../../../NorthwindModel/orders-qry.entity';

// #region Custom
// #endregion Custom
@Injectable()
export class OrdersQriesService extends ODataEntitySetService<OrdersQry> {
  constructor(client: ODataClient) {
    super(client, 'Orders_Qries', 'NorthwindModel.Orders_Qry');
  }
  ordersQryModel(entity?: Partial<OrdersQry>) {
    return this.model<OrdersQryModel<OrdersQry>>(entity);
  }
  ordersQryCollection(entities?: Partial<OrdersQry>[]) {
    return this.collection<OrdersQryModel<OrdersQry>, OrdersQryCollection<OrdersQry, OrdersQryModel<OrdersQry>>>(entities);
  }
// #region Custom
// #endregion Custom
}
