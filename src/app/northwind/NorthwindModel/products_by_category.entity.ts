//#region ODataApi Imports
//#endregion

export interface Products_by_Category {
  //#region ODataApi Properties
  CategoryName: string;
  ProductName: string;
  QuantityPerUnit?: string;
  UnitsInStock?: number;
  Discontinued: boolean;
  //#endregion
}