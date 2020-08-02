import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { OrderDetail } from './order_detail.entity';
import { OrderDetailModel } from './order_detail.model';
import { OrderDetailCollection } from './order_detail.collection';
//#endregion

export const OrderDetailConfig = {
  name: "OrderDetail",
  model: OrderDetailModel,
  collection: OrderDetailCollection,
  annotations: [],
  fields: {
    orderID: {name: 'OrderID', type: 'Edm.Int32', key: true, ref: 'orderID', nullable: false},
    productID: {name: 'ProductID', type: 'Edm.Int32', key: true, ref: 'productID', nullable: false},
    unitPrice: {name: 'UnitPrice', type: 'Edm.Decimal', nullable: false, precition: 19, scale: 4},
    quantity: {name: 'Quantity', type: 'Edm.Int16', nullable: false},
    discount: {name: 'Discount', type: 'Edm.Single', nullable: false},
    order: {name: 'Order', type: 'NorthwindModel.Order', navigation: true, field: 'OrderID', ref: 'OrderID'},
    product: {name: 'Product', type: 'NorthwindModel.Product', navigation: true, field: 'ProductID', ref: 'ProductID'}
  }
} as EntityConfig<OrderDetail>;