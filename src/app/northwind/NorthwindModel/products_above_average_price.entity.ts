import { Duration } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export interface ProductsAboveAveragePrice {
  //#region ODataApi Properties
  productName: string;
  unitPrice?: number;
  //#endregion
}