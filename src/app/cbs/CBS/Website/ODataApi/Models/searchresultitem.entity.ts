//#region AngularOData Imports
import { 
  Duration 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
//#endregion

export interface SearchResultItem {
  //#region ODataApi Properties
  UniqueId: string;
  Type?: string;
  Permalink?: string;
  Title?: string;
  ReleaseTime: Date;
  Url?: string;
  MetaDescription?: string;
  Image?: string;
  ImageAlt?: string;
  Description?: string;
  LeadText?: string;
  Body?: string;
  Snippet?: string;
  Location?: string;
  Language?: string;
  Themes?: string[];
  TemplateName?: string;
  ItemNameLowerCase?: string;
  SortOrder: number;
  //#endregion
}