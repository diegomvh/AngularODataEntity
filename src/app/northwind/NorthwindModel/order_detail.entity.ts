import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Order } from './order.entity';
import { Product } from './product.entity';
import { OrderModel } from './order.model';
import { ProductModel } from './product.model';
import { OrderCollection } from './order.collection';
import { ProductCollection } from './product.collection';
//#endregion

export interface OrderDetail {
  //#region ODataApi Properties
  orderID: number;
  productID: number;
  unitPrice: number;
  quantity: number;
  discount: number;
  order?: Order;
  product?: Product;
  //#endregion
}