import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { OrderSubtotal } from './order_subtotal.entity';
//#endregion

export const OrderSubtotalConfig = {
  name: "Order_Subtotal",
  annotations: [],
  fields: {
    OrderID: {type: 'Edm.Int32', key: true, ref: 'OrderID', nullable: false},
    Subtotal: {type: 'Edm.Decimal', precition: 19, scale: 4}
  }
} as EntityConfig<OrderSubtotal>;