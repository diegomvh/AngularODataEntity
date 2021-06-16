//#region AngularOData Imports
import { 
  Duration 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
//#endregion

export interface Category {
  //#region ODataApi Properties
  Key: string;
  Title?: string;
  Description?: string;
  CategoryGroupID?: number;
  //#endregion
}