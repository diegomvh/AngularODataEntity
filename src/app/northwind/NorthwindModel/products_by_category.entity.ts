//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
//#endregion

export interface ProductsByCategory {
  //#region ODataApiGen Properties
  CategoryName: string;
  ProductName: string;
  QuantityPerUnit?: string;
  UnitsInStock?: number;
  Discontinued: boolean;
  //#endregion
}