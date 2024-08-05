//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { OrderDetail } from './order-detail.entity';
import { OrderDetailModel } from './order-detail.model';
import { OrderDetailCollection } from './order-detail.collection';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const OrderDetailEntityConfig = {
  name: 'Order_Detail',
  model: OrderDetailModel,
  collection: OrderDetailCollection,
  keys: [{name: 'OrderID'},{name: 'ProductID'}],
  fields: {
    OrderID: {type: 'Edm.Int32', nullable: false},
    ProductID: {type: 'Edm.Int32', nullable: false},
    UnitPrice: {type: 'Edm.Decimal', nullable: false},
    Quantity: {type: 'Edm.Int16', nullable: false},
    Discount: {type: 'Edm.Single', nullable: false},
    Order: {type: 'NorthwindModel.Order', navigation: true},
    Product: {type: 'NorthwindModel.Product', navigation: true}
  }
} as StructuredTypeConfig;
//#endregion