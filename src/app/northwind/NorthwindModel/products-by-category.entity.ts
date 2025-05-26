import { Duration } from 'angular-odata';

export const ProductsByCategoryEntityType = 'NorthwindModel.Products_by_Category';
export interface ProductsByCategory {
  CategoryName: string;
  ProductName: string;
  QuantityPerUnit: string;
  UnitsInStock: number;
  Discontinued: boolean;
}
