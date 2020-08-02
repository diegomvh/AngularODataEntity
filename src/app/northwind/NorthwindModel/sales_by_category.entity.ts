import { Duration } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export interface SalesByCategory {
  //#region ODataApi Properties
  categoryID: number;
  categoryName: string;
  productName: string;
  productSales?: number;
  //#endregion
}