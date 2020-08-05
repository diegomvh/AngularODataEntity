import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { MediaType } from './mediatype.enum';
//#endregion

export interface Medium {
  //#region ODataApi Properties
  UniqueId: string;
  Title?: string;
  MediaType: MediaType;
  MediaTypeInt: number;
  ReleaseTime: Date;
  Description?: string;
  LeadText?: string;
  Url?: string;
  MetaDescription?: string;
  TaxonomyTags?: string[];
  Themes?: string[];
  Series?: string[];
  Language?: string;
  Version: number;
  SortOrder: number;
  ItemNameLowerCase?: string;
  Updated: Date;
  Created: Date;
  Permalink?: string;
  //#endregion
}