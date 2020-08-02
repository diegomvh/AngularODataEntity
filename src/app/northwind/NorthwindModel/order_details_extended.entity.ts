import { Duration } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export interface OrderDetailsExtended {
  //#region ODataApi Properties
  orderID: number;
  productID: number;
  productName: string;
  unitPrice: number;
  quantity: number;
  discount: number;
  extendedPrice?: number;
  //#endregion
}