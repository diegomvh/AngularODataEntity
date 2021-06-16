//#region AngularOData Imports
import { 
  Duration 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { ArticleType } from './articletype.enum';
import { ErrataList } from './erratalist.complex';
import { LinkList } from './linklist.complex';
import { ErrataListModel } from './erratalist.model';
import { LinkListModel } from './linklist.model';
import { ErrataListCollection } from './erratalist.collection';
import { LinkListCollection } from './linklist.collection';
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