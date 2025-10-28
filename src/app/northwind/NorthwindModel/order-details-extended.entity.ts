import { Duration } from 'angular-odata';


export const OrderDetailsExtendedEntityType = 'NorthwindModel.Order_Details_Extended';
export interface OrderDetailsExtended {
  OrderID: number;
  ProductID: number;
  ProductName: string;
  UnitPrice: number;
  Quantity: number;
  Discount: number;
  ExtendedPrice: number;
}
