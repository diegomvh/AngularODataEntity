import { Duration } from 'angular-odata';
import { Order } from './order.entity';
import { Product } from './product.entity';

export const OrderDetailEntityType = 'NorthwindModel.Order_Detail';
export interface OrderDetail {
  OrderID: number;
  ProductID: number;
  UnitPrice: number;
  Quantity: number;
  Discount: number;
  Order: Order;
  Product: Product;
}
