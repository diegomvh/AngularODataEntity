//#region AngularOData Imports
import { 
  StructuredTypeConfig 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { OrderDetail } from './order_detail.entity';
import { OrderDetailModel } from './order_detail.model';
import { OrderDetailCollection } from './order_detail.collection';
//#endregion

//#region ODataApi StrucutredTypeConfig
export const OrderDetailEntityConfig = {
  name: "Order_Detail",
  model: OrderDetailModel,
  collection: OrderDetailCollection,
  keys: [{ref: 'OrderID'},{ref: 'ProductID'}],
  fields: {
    OrderID: {type: 'Edm.Int32', nullable: false},
    ProductID: {type: 'Edm.Int32', nullable: false},
    UnitPrice: {type: 'Edm.Decimal', nullable: false, precition: 19, scale: 4},
    Quantity: {type: 'Edm.Int16', nullable: false},
    Discount: {type: 'Edm.Single', nullable: false},
    Order: {type: 'NorthwindModel.Order', navigation: true, referential: 'OrderID', referenced: 'OrderID'},
    Product: {type: 'NorthwindModel.Product', navigation: true, referential: 'ProductID', referenced: 'ProductID'}
  }
} as StructuredTypeConfig<OrderDetail>;
//#endregion