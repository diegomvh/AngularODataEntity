//#region AngularOData Imports
import { 
  Duration 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
//#endregion

export interface TableInfo {
  //#region ODataApi Properties
  ID: number;
  Title?: string;
  ShortTitle?: string;
  Identifier?: string;
  Summary?: string;
  Modified?: any;
  ReasonDelivery?: string;
  ExplanatoryText?: string;
  Language?: string;
  Catalog?: string;
  Frequency?: string;
  Period?: string;
  ShortDescription?: string;
  Description?: string;
  DefaultPresentation?: string;
  DefaultSelection?: string;
  GraphTypes?: string;
  OutputStatus?: string;
  Source?: string;
  MetaDataModified?: any;
  SearchPriority?: string;
  //#endregion
}