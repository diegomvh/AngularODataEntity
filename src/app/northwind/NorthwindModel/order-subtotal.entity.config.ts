//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { OrderSubtotal } from './order-subtotal.entity';
import { OrderSubtotalModel } from './order-subtotal.model';
import { OrderSubtotalCollection } from './order-subtotal.collection';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const OrderSubtotalEntityConfig = {
  name: 'Order_Subtotal',
  model: OrderSubtotalModel,
  collection: OrderSubtotalCollection,
  keys: [{name: 'OrderID'}],
  fields: {
    OrderID: {type: 'Edm.Int32', nullable: false},
    Subtotal: {type: 'Edm.Decimal'}
  }
} as StructuredTypeConfig;
//#endregion