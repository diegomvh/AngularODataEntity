//#region AngularOData Imports
import { 
  Duration 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
//#endregion

export interface SalesTotalsByAmount {
  //#region ODataApi Properties
  SaleAmount?: number;
  OrderID: number;
  CompanyName: string;
  ShippedDate?: Date;
  //#endregion
}