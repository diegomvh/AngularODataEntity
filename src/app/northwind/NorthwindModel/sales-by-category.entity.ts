import { Duration } from 'angular-odata';

export const SalesByCategoryEntityType = 'NorthwindModel.Sales_by_Category';
export interface SalesByCategory {
  CategoryID: number;
  CategoryName: string;
  ProductName: string;
  ProductSales: number;
}
