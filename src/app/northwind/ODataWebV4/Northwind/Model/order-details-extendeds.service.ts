import { Injectable } from '@angular/core';
import { ODataClient, 
  ODataActionResource, 
  ODataActionOptions, 
  ODataFunctionResource, 
  ODataFunctionOptions, 
  ODataEntitySetService, 
  ODataOptions,
  EntityKey } from 'angular-odata';
import { OrderDetailsExtended } from '../../../NorthwindModel/order-details-extended.entity';

@Injectable()
export class OrderDetailsExtendedsService extends ODataEntitySetService<OrderDetailsExtended> {
  constructor(client: ODataClient) {
    super(client, 'Order_Details_Extendeds', 'NorthwindModel.Order_Details_Extended');
  }
  orderDetailsExtendedModel(entity?: Partial<OrderDetailsExtended>) {
    return this.model(entity);
  }
  orderDetailsExtendedCollection(entities?: Partial<OrderDetailsExtended>[]) {
    return this.collection(entities);
  }
}
