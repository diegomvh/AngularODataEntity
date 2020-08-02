import { Duration } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export interface SummaryOfSalesByQuarter {
  //#region ODataApi Properties
  ShippedDate?: Date;
  OrderID: number;
  Subtotal?: number;
  //#endregion
}