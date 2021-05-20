import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { OrderSubtotal } from './order_subtotal.entity';
import { OrderSubtotalModel } from './order_subtotal.model';
import { OrderSubtotalCollection } from './order_subtotal.collection';
//#endregion

//#region ODataApi StrucutredTypeConfig
export const OrderSubtotalEntityConfig = {
  name: "Order_Subtotal",
  model: OrderSubtotalModel,
  collection: OrderSubtotalCollection,
  keys: [{ref: 'OrderID'}],
  fields: {
    OrderID: {type: 'Edm.Int32', nullable: false},
    Subtotal: {type: 'Edm.Decimal', precition: 19, scale: 4}
  }
} as StructuredTypeConfig<OrderSubtotal>;
//#endregion