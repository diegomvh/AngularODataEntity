import { Duration } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export interface SummaryOfSalesByQuarter {
  //#region ODataApi Properties
  shippedDate?: Date;
  orderID: number;
  subtotal?: number;
  //#endregion
}