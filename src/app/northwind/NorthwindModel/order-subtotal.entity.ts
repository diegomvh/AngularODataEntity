import { Duration } from 'angular-odata';


export const OrderSubtotalEntityType = 'NorthwindModel.Order_Subtotal';
export interface OrderSubtotal {
  OrderID: number;
  Subtotal: number;
}
