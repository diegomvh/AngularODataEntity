import { Duration } from 'angular-odata';


export const SummaryOfSalesByQuarterEntityType = 'NorthwindModel.Summary_of_Sales_by_Quarter';
export interface SummaryOfSalesByQuarter {
  ShippedDate: Date;
  OrderID: number;
  Subtotal: number;
}
