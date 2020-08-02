import { Duration } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export interface SalesByCategory {
  //#region ODataApi Properties
  CategoryID: number;
  CategoryName: string;
  ProductName: string;
  ProductSales?: number;
  //#endregion
}