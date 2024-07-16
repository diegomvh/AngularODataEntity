//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
//#endregion

//#region ODataApiGen Type
export const SalesByCategoryType = 'NorthwindModel.Sales_by_Category';//#endregion
export interface SalesByCategory {
  //#region ODataApiGen Properties
  CategoryID: number;
  CategoryName: string;
  ProductName: string;
  ProductSales?: number;
  //#endregion
}