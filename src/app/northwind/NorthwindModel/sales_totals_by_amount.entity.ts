import { Duration } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export interface SalesTotalsByAmount {
  //#region ODataApi Properties
  saleAmount?: number;
  orderID: number;
  companyName: string;
  shippedDate?: Date;
  //#endregion
}