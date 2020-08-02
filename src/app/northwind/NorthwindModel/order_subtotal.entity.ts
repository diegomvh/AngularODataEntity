import { Duration } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export interface OrderSubtotal {
  //#region ODataApi Properties
  orderID: number;
  subtotal?: number;
  //#endregion
}