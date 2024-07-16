//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
//#endregion

//#region ODataApiGen Type
export const InvoiceType = 'NorthwindModel.Invoice';//#endregion
export interface Invoice {
  //#region ODataApiGen Properties
  ShipName?: string;
  ShipAddress?: string;
  ShipCity?: string;
  ShipRegion?: string;
  ShipPostalCode?: string;
  ShipCountry?: string;
  CustomerID?: string;
  CustomerName: string;
  Address?: string;
  City?: string;
  Region?: string;
  PostalCode?: string;
  Country?: string;
  Salesperson: string;
  OrderID: number;
  OrderDate?: Date;
  RequiredDate?: Date;
  ShippedDate?: Date;
  ShipperName: string;
  ProductID: number;
  ProductName: string;
  UnitPrice: number;
  Quantity: number;
  Discount: number;
  ExtendedPrice?: number;
  Freight?: number;
  //#endregion
}