//#region ODataApi Imports
import { Order } from './order.entity';
import { Product } from './product.entity';
//#endregion

export interface Order_Detail {
  //#region ODataApi Properties
  OrderID: number;
  ProductID: number;
  UnitPrice: number;
  Quantity: number;
  Discount: number;
  Order?: Order;
  Product?: Product;
  //#endregion
}