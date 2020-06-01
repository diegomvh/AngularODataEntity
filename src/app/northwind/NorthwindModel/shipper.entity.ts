//#region ODataApi Imports
import { Order } from './order.entity';
//#endregion

export interface Shipper {
  //#region ODataApi Properties
  ShipperID: number;
  CompanyName: string;
  Phone?: string;
  Orders?: Order[];
  //#endregion
}