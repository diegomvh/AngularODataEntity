//#region AngularOData Imports
import { 
  Duration 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
//#endregion

export interface CustomerAndSuppliersByCity {
  //#region ODataApi Properties
  City?: string;
  CompanyName: string;
  ContactName?: string;
  Relationship: string;
  //#endregion
}