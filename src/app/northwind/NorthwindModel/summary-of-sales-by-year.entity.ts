//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
//#endregion

//#region ODataApiGen Type
export const SummaryOfSalesByYearType = 'NorthwindModel.Summary_of_Sales_by_Year';//#endregion
export interface SummaryOfSalesByYear {
  //#region ODataApiGen Properties
  ShippedDate?: Date;
  OrderID: number;
  Subtotal?: number;
  //#endregion
}