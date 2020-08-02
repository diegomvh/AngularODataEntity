import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { OrderSubtotal } from './order_subtotal.entity';
import { OrderSubtotalModel } from './order_subtotal.model';
import { OrderSubtotalCollection } from './order_subtotal.collection';
//#endregion

export const OrderSubtotalConfig = {
  name: "OrderSubtotal",
  model: OrderSubtotalModel,
  collection: OrderSubtotalCollection,
  annotations: [],
  fields: {
    orderID: {name: 'OrderID', type: 'Edm.Int32', key: true, ref: 'orderID', nullable: false},
    subtotal: {name: 'Subtotal', type: 'Edm.Decimal', precition: 19, scale: 4}
  }
} as EntityConfig<OrderSubtotal>;