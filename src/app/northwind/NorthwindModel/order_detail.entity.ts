//#region AngularOData Imports
import { 
  Duration 
} from 'angular-odata';//#endregion

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
  OrderID: number;
  ProductID: number;
  UnitPrice: number;
  Quantity: number;
  Discount: number;
  Order?: Order;
  Product?: Product;
  //#endregion
}