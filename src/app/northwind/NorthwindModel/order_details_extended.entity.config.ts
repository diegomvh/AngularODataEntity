import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Order_Details_Extended } from './order_details_extended.entity';
//#endregion

export const Order_Details_ExtendedConfig = {
  name: "Order_Details_Extended",
  annotations: [],
  fields: {
    OrderID: {type: 'number', key: true, ref: 'OrderID', nullable: false},
    ProductID: {type: 'number', key: true, ref: 'ProductID', nullable: false},
    ProductName: {type: 'string', key: true, ref: 'ProductName', nullable: false, maxLength: 40},
    UnitPrice: {type: 'number', key: true, ref: 'UnitPrice', nullable: false},
    Quantity: {type: 'number', key: true, ref: 'Quantity', nullable: false},
    Discount: {type: 'number', key: true, ref: 'Discount', nullable: false},
    ExtendedPrice: {type: 'number'}
  }
} as EntityConfig<Order_Details_Extended>;