import { Duration } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export interface Alphabetical_list_of_product {
  //#region ODataApi Properties
  ProductID: number;
  ProductName: string;
  SupplierID?: number;
  CategoryID?: number;
  QuantityPerUnit?: string;
  UnitPrice?: number;
  UnitsInStock?: number;
  UnitsOnOrder?: number;
  ReorderLevel?: number;
  Discontinued: boolean;
  CategoryName: string;
  //#endregion
}