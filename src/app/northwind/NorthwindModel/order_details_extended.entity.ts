import { Duration } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export interface Order_Details_Extended {
  //#region ODataApi Properties
  OrderID: number;
  ProductID: number;
  ProductName: string;
  UnitPrice: number;
  Quantity: number;
  Discount: number;
  ExtendedPrice?: number;
  //#endregion
}