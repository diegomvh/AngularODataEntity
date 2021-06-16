//#region AngularOData Imports
import { 
  Duration 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
//#endregion

export interface ProductsAboveAveragePrice {
  //#region ODataApi Properties
  ProductName: string;
  UnitPrice?: number;
  //#endregion
}