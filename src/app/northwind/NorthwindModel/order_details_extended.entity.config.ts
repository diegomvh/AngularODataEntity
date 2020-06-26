import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Order_Details_Extended } from './order_details_extended.entity';
//#endregion

export const Order_Details_ExtendedConfig = {
  name: "Order_Details_Extended",
  annotations: [],
  fields: {
    OrderID: {type: 'Number', key: true, ref: 'OrderID', nullable: false},
    ProductID: {type: 'Number', key: true, ref: 'ProductID', nullable: false},
    ProductName: {type: 'String', key: true, ref: 'ProductName', nullable: false, maxLength: 40},
    UnitPrice: {type: 'Number', key: true, ref: 'UnitPrice', nullable: false, scale: 4},
    Quantity: {type: 'Number', key: true, ref: 'Quantity', nullable: false},
    Discount: {type: 'Number', key: true, ref: 'Discount', nullable: false},
    ExtendedPrice: {type: 'Number', scale: 4}
  }
} as EntityConfig<Order_Details_Extended>;