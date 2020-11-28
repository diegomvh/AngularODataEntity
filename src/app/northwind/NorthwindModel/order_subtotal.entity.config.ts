import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { OrderSubtotal } from './order_subtotal.entity';
import { OrderSubtotalModel } from './order_subtotal.model';
import { OrderSubtotalCollection } from './order_subtotal.collection';
//#endregion

export const OrderSubtotalConfig = {
  name: "Order_Subtotal",
  model: OrderSubtotalModel,
  collection: OrderSubtotalCollection,
  annotations: [],
  fields: {
    OrderID: {type: 'Edm.Int32', key: true, ref: 'OrderID', nullable: false},
    Subtotal: {type: 'Edm.Decimal', precition: 19, scale: 4}
  }
} as StructuredTypeConfig<OrderSubtotal>;