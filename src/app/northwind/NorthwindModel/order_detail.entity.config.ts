import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Order_Detail } from './order_detail.entity';
//#endregion

export const Order_DetailConfig = {
  name: "Order_Detail",
  annotations: [],
  fields: {
    OrderID: {type: 'number', key: true, ref: 'OrderID', nullable: false},
    ProductID: {type: 'number', key: true, ref: 'ProductID', nullable: false},
    UnitPrice: {type: 'number', nullable: false},
    Quantity: {type: 'number', nullable: false},
    Discount: {type: 'number', nullable: false},
    Order: {type: 'NorthwindModel.Order', navigation: true, field: 'OrderID', ref: 'OrderID'},
    Product: {type: 'NorthwindModel.Product', navigation: true, field: 'ProductID', ref: 'ProductID'}
  }
} as EntityConfig<Order_Detail>;