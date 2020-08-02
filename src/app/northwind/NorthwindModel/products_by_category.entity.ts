import { Duration } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export interface ProductsByCategory {
  //#region ODataApi Properties
  CategoryName: string;
  ProductName: string;
  QuantityPerUnit?: string;
  UnitsInStock?: number;
  Discontinued: boolean;
  //#endregion
}