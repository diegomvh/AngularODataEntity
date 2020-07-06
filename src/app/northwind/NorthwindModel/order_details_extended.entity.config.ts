import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Order_Details_Extended } from './order_details_extended.entity';
//#endregion

export const Order_Details_ExtendedConfig = {
  name: "Order_Details_Extended",
  annotations: [],
  fields: {
    OrderID: {type: 'Edm.Int32', key: true, ref: 'OrderID', nullable: false},
    ProductID: {type: 'Edm.Int32', key: true, ref: 'ProductID', nullable: false},
    ProductName: {type: 'Edm.String', key: true, ref: 'ProductName', nullable: false, maxLength: 40},
    UnitPrice: {type: 'Edm.Decimal', key: true, ref: 'UnitPrice', nullable: false, precition: 19, scale: 4},
    Quantity: {type: 'Edm.Int16', key: true, ref: 'Quantity', nullable: false},
    Discount: {type: 'Edm.Single', key: true, ref: 'Discount', nullable: false},
    ExtendedPrice: {type: 'Edm.Decimal', precition: 19, scale: 4}
  }
} as EntityConfig<Order_Details_Extended>;