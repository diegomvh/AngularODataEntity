import { Injectable } from '@angular/core';
import { ODataClient, 
  ODataActionResource, 
  ODataActionOptions, 
  ODataFunctionResource, 
  ODataFunctionOptions, 
  ODataEntitySetService, 
  ODataOptions,
  EntityKey } from 'angular-odata';
import { OrdersQry } from '../../../NorthwindModel/orders-qry.entity';

@Injectable()
export class OrdersQriesService extends ODataEntitySetService<OrdersQry> {
  constructor(client: ODataClient) {
    super(client, 'Orders_Qries', 'NorthwindModel.Orders_Qry');
  }
  ordersQryModel(entity?: Partial<OrdersQry>) {
    return this.model(entity);
  }
  ordersQryCollection(entities?: Partial<OrdersQry>[]) {
    return this.collection(entities);
  }
}
