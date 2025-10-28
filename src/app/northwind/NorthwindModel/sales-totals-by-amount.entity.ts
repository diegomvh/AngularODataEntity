import { Duration } from 'angular-odata';


export const SalesTotalsByAmountEntityType = 'NorthwindModel.Sales_Totals_by_Amount';
export interface SalesTotalsByAmount {
  SaleAmount: number;
  OrderID: number;
  CompanyName: string;
  ShippedDate: Date;
}
