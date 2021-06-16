//#region AngularOData Imports
import { 
  Duration 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
//#endregion

export interface Address {
  //#region ODataApi Properties
  Street?: string;
  City?: string;
  State?: string;
  ZipCode?: string;
  Country?: string;
  //#endregion
}