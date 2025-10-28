import { Duration } from 'angular-odata';


export const SummaryOfSalesByYearEntityType = 'NorthwindModel.Summary_of_Sales_by_Year';
export interface SummaryOfSalesByYear {
  ShippedDate: Date;
  OrderID: number;
  Subtotal: number;
}
