//#region AngularOData Imports
import { 
  Duration 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
//#endregion

export interface CategoryGroup {
  //#region ODataApi Properties
  ID: number;
  DimensionKey?: string;
  Title?: string;
  Description?: string;
  ParentID?: number;
  //#endregion
}