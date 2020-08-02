import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { OrderDetailsExtended } from './order_details_extended.entity';
import { OrderDetailsExtendedModel } from './order_details_extended.model';
import { OrderDetailsExtendedCollection } from './order_details_extended.collection';
//#endregion

export const OrderDetailsExtendedConfig = {
  name: "OrderDetailsExtended",
  model: OrderDetailsExtendedModel,
  collection: OrderDetailsExtendedCollection,
  annotations: [],
  fields: {
    orderID: {name: 'OrderID', type: 'Edm.Int32', key: true, ref: 'orderID', nullable: false},
    productID: {name: 'ProductID', type: 'Edm.Int32', key: true, ref: 'productID', nullable: false},
    productName: {name: 'ProductName', type: 'Edm.String', key: true, ref: 'productName', nullable: false, maxLength: 40},
    unitPrice: {name: 'UnitPrice', type: 'Edm.Decimal', key: true, ref: 'unitPrice', nullable: false, precition: 19, scale: 4},
    quantity: {name: 'Quantity', type: 'Edm.Int16', key: true, ref: 'quantity', nullable: false},
    discount: {name: 'Discount', type: 'Edm.Single', key: true, ref: 'discount', nullable: false},
    extendedPrice: {name: 'ExtendedPrice', type: 'Edm.Decimal', precition: 19, scale: 4}
  }
} as EntityConfig<OrderDetailsExtended>;