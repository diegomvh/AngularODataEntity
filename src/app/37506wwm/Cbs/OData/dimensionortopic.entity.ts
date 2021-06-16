//#region AngularOData Imports
import { 
  Duration 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
//#endregion

export interface DimensionOrTopic {
  //#region ODataApi Properties
  ID: number;
  Position?: number;
  ParentID?: number;
  Type?: string;
  Key?: string;
  Title?: string;
  Description?: string;
  //#endregion
}