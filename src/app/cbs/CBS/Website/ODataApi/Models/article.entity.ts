import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { ArticleType } from './articletype.enum';
import { ErrataList } from './erratalist.entity';
import { LinkList } from './linklist.entity';
//#endregion

export interface Article {
  //#region ODataApi Properties
  UniqueId: string;
  ArticleType: ArticleType;
  ArticleTypeInt: number;
  Title?: string;
  ReleaseTime: Date;
  Url?: string;
  MetaDescription?: string;
  Image?: string;
  ImageAlt?: string;
  Category?: string;
  Photographer?: string;
  LeadText?: string;
  Body?: string;
  Footnote?: string;
  Errata?: ErrataList;
  Authors?: string;
  Location?: string;
  ISSN?: string;
  ISBN?: string;
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
  Created: Date;
  Permalink?: string;
  //#endregion
}