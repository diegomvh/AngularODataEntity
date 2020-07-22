import { Duration } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export interface Sales_Totals_by_Amount {
  //#region ODataApi Properties
  SaleAmount?: number;
  OrderID: number;
  CompanyName: string;
  ShippedDate?: Date;
  //#endregion
}