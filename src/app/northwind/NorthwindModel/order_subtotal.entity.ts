//#region AngularOData Imports
import { 
  Duration 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
//#endregion

export interface OrderSubtotal {
  //#region ODataApi Properties
  OrderID: number;
  Subtotal?: number;
  //#endregion
}