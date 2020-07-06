import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Order_Detail } from './order_detail.entity';
//#endregion

export const Order_DetailConfig = {
  name: "Order_Detail",
  annotations: [],
  fields: {
    OrderID: {type: 'Edm.Int32', key: true, ref: 'OrderID', nullable: false},
    ProductID: {type: 'Edm.Int32', key: true, ref: 'ProductID', nullable: false},
    UnitPrice: {type: 'Edm.Decimal', nullable: false, precition: 19, scale: 4},
    Quantity: {type: 'Edm.Int16', nullable: false},
    Discount: {type: 'Edm.Single', nullable: false},
    Order: {type: 'NorthwindModel.Order', navigation: true, field: 'OrderID', ref: 'OrderID'},
    Product: {type: 'NorthwindModel.Product', navigation: true, field: 'ProductID', ref: 'ProductID'}
  }
} as EntityConfig<Order_Detail>;