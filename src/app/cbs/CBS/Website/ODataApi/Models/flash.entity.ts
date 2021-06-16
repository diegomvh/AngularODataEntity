//#region AngularOData Imports
import { 
  Duration 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
//#endregion

export interface Flash {
  //#region ODataApi Properties
  UniqueId: string;
  Title?: string;
  ReleaseTime: Date;
  Description?: string;
  LeadText?: string;
  Url?: string;
  MetaDescription?: string;
  Language?: string;
  Version: number;
  SortOrder: number;
  ItemNameLowerCase?: string;
  Updated: Date;
  Created: Date;
  //#endregion
}