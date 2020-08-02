import { Duration } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export interface ProductsByCategory {
  //#region ODataApi Properties
  categoryName: string;
  productName: string;
  quantityPerUnit?: string;
  unitsInStock?: number;
  discontinued: boolean;
  //#endregion
}