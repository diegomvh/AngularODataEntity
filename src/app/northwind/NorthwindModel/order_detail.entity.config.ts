//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { OrderDetail } from './order_detail.entity';
import { OrderDetailModel } from './order_detail.model';
import { OrderDetailCollection } from './order_detail.collection';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const OrderDetailEntityConfig = {
  name: "Order_Detail",
  model: OrderDetailModel,
  collection: OrderDetailCollection,
  keys: [{name: 'OrderID'},{name: 'ProductID'}],
  fields: {
    OrderID: {type: 'Edm.Int32', nullable: false},
    ProductID: {type: 'Edm.Int32', nullable: false},
    UnitPrice: {type: 'Edm.Decimal', nullable: false, precition: 19, scale: 4},
    Quantity: {type: 'Edm.Int16', nullable: false},
    Discount: {type: 'Edm.Single', nullable: false},
    Order: {type: 'NorthwindModel.Order', navigation: true, referentials: [{property: 'OrderID', referencedProperty: 'OrderID'}]},
    Product: {type: 'NorthwindModel.Product', navigation: true, referentials: [{property: 'ProductID', referencedProperty: 'ProductID'}]}
  }
} as StructuredTypeConfig<OrderDetail>;
//#endregion