import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { PageType } from './pagetype.enum';
import { LinkList } from './linklist.entity';
//#endregion

export interface Page {
  //#region ODataApi Properties
  UniqueId: string;
  PageType: PageType;
  PageTypeInt: number;
  Title?: string;
  SubTitle?: string;
  Edition?: string;
  Url?: string;
  MetaDescription?: string;
  Image?: string;
  ImageAlt?: string;
  Category?: string[];
  Photographer?: string;
  LeadText?: string;
  Body?: string;
  Footnote?: string;
  Authors?: string;
  Location?: string;
  TaxonomyTags?: string[];
  Themes?: string[];
  Series?: string[];
  References?: LinkList;
  Downloads?: LinkList;
  Links?: LinkList;
  Language?: string;
  Version: number;
  SortOrder: number;
  ItemNameLowerCase?: string;
  Updated: Date;
  ReleaseTime: Date;
  Created: Date;
  Permalink?: string;
  //#endregion
}