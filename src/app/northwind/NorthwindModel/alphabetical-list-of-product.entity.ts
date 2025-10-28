import { Duration } from 'angular-odata';


export const AlphabeticalListOfProductEntityType = 'NorthwindModel.Alphabetical_list_of_product';
export interface AlphabeticalListOfProduct {
  ProductID: number;
  ProductName: string;
  SupplierID: number;
  CategoryID: number;
  QuantityPerUnit: string;
  UnitPrice: number;
  UnitsInStock: number;
  UnitsOnOrder: number;
  ReorderLevel: number;
  Discontinued: boolean;
  CategoryName: string;
}
