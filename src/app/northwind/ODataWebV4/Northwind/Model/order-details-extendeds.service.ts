import { Injectable } from '@angular/core';
import { ODataClient, 
  ODataActionResource, 
  ODataActionOptions, 
  ODataFunctionResource, 
  ODataFunctionOptions, 
  ODataEntitySetService, 
  ODataOptions,
  EntityKey } from 'angular-odata';
import { OrderDetailsExtendedModel } from '../../../NorthwindModel/order-details-extended.model';
import { OrderDetailsExtendedCollection } from '../../../NorthwindModel/order-details-extended.collection';
import { OrderDetailsExtended } from '../../../NorthwindModel/order-details-extended.entity';

// #region Custom
// #endregion Custom
@Injectable()
export class OrderDetailsExtendedsService extends ODataEntitySetService<OrderDetailsExtended> {
  constructor(client: ODataClient) {
    super(client, 'Order_Details_Extendeds', 'NorthwindModel.Order_Details_Extended');
  }
  orderDetailsExtendedModel(entity?: Partial<OrderDetailsExtended>) {
    return this.model<OrderDetailsExtendedModel<OrderDetailsExtended>>(entity);
  }
  orderDetailsExtendedCollection(entities?: Partial<OrderDetailsExtended>[]) {
    return this.collection<OrderDetailsExtendedModel<OrderDetailsExtended>, OrderDetailsExtendedCollection<OrderDetailsExtended, OrderDetailsExtendedModel<OrderDetailsExtended>>>(entities);
  }
// #region Custom
// #endregion Custom
}
