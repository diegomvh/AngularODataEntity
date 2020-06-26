import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Order_Subtotal } from './order_subtotal.entity';
//#endregion

export const Order_SubtotalConfig = {
  name: "Order_Subtotal",
  annotations: [],
  fields: {
    OrderID: {type: 'Number', key: true, ref: 'OrderID', nullable: false},
    Subtotal: {type: 'Number', scale: 4}
  }
} as EntityConfig<Order_Subtotal>;