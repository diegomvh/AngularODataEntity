//#region ODataApi Imports
//#endregion

export interface Order_Details_Extended {
  //#region ODataApi Properties
  OrderID: number;
  ProductID: number;
  ProductName: string;
  UnitPrice: Decimal;
  Quantity: number;
  Discount: number;
  ExtendedPrice?: Decimal;
  //#endregion
}