import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Order } from './order.entity';
import { OrderModel } from './order.model';
import { OrderCollection } from './order.collection';
//#endregion

export interface Shipper {
  //#region ODataApi Properties
  shipperID: number;
  companyName: string;
  phone?: string;
  orders?: Order[];
  //#endregion
}