//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Order } from './order.entity';
import { OrderModel } from './order.model';
import { OrderCollection } from './order.collection';
//#endregion

export interface Shipper {
  //#region ODataApiGen Properties
  ShipperID: number;
  CompanyName: string;
  Phone?: string;
  Orders?: Order[];
  //#endregion
}