//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
//#endregion

//#region ODataApiGen Type
export const AlphabeticalListOfProductType = 'NorthwindModel.Alphabetical_list_of_product';//#endregion
export interface AlphabeticalListOfProduct {
  //#region ODataApiGen Properties
  ProductID: number;
  ProductName: string;
  SupplierID?: number;
  CategoryID?: number;
  QuantityPerUnit?: string;
  UnitPrice?: number;
  UnitsInStock?: number;
  UnitsOnOrder?: number;
  ReorderLevel?: number;
  Discontinued: boolean;
  CategoryName: string;
  //#endregion
}