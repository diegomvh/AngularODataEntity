//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
//#endregion

//#region ODataApiGen Type
export const ProductsByCategoryType = 'NorthwindModel.Products_by_Category';//#endregion
export interface ProductsByCategory {
  //#region ODataApiGen Properties
  CategoryName: string;
  ProductName: string;
  QuantityPerUnit?: string;
  UnitsInStock?: number;
  Discontinued: boolean;
  //#endregion
}