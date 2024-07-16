//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
//#endregion

//#region ODataApiGen Type
export const SalesTotalsByAmountType = 'NorthwindModel.Sales_Totals_by_Amount';//#endregion
export interface SalesTotalsByAmount {
  //#region ODataApiGen Properties
  SaleAmount?: number;
  OrderID: number;
  CompanyName: string;
  ShippedDate?: Date;
  //#endregion
}