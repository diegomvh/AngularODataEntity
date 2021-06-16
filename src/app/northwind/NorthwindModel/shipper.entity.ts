//#region AngularOData Imports
import { 
  Duration 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { Order } from './order.entity';
import { OrderModel } from './order.model';
import { OrderCollection } from './order.collection';
//#endregion

export interface Shipper {
  //#region ODataApi Properties
  ShipperID: number;
  CompanyName: string;
  Phone?: string;
  Orders?: Order[];
  //#endregion
}