import { Duration } from 'angular-odata';

export const ProductsAboveAveragePriceEntityType = 'NorthwindModel.Products_Above_Average_Price';
export interface ProductsAboveAveragePrice {
  ProductName: string;
  UnitPrice: number;
}
