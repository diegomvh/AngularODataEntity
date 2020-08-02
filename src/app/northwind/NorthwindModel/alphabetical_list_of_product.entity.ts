import { Duration } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export interface AlphabeticalListOfProduct {
  //#region ODataApi Properties
  productID: number;
  productName: string;
  supplierID?: number;
  categoryID?: number;
  quantityPerUnit?: string;
  unitPrice?: number;
  unitsInStock?: number;
  unitsOnOrder?: number;
  reorderLevel?: number;
  discontinued: boolean;
  categoryName: string;
  //#endregion
}