//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { OrderDetailsExtended } from './order-details-extended.entity';
import { OrderDetailsExtendedModel } from './order-details-extended.model';
import { OrderDetailsExtendedCollection } from './order-details-extended.collection';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const OrderDetailsExtendedEntityConfig = {
  name: 'Order_Details_Extended',
  model: OrderDetailsExtendedModel,
  collection: OrderDetailsExtendedCollection,
  keys: [{name: 'Discount'},{name: 'OrderID'},{name: 'ProductID'},{name: 'ProductName'},{name: 'Quantity'},{name: 'UnitPrice'}],
  fields: {
    OrderID: {type: 'Edm.Int32', nullable: false},
    ProductID: {type: 'Edm.Int32', nullable: false},
    ProductName: {type: 'Edm.String', nullable: false},
    UnitPrice: {type: 'Edm.Decimal', nullable: false},
    Quantity: {type: 'Edm.Int16', nullable: false},
    Discount: {type: 'Edm.Single', nullable: false},
    ExtendedPrice: {type: 'Edm.Decimal'}
  }
} as StructuredTypeConfig;
//#endregion