import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ArticleType } from './articletype.enum';
import { ErrataList } from './erratalist.complex';
import { LinkList } from './linklist.complex';
import { Article } from './article.entity';
import { ErrataListModel } from './erratalist.model';
import { LinkListModel } from './linklist.model';
import { ErrataListCollection } from './erratalist.collection';
import { LinkListCollection } from './linklist.collection';
import { ArticleCollection } from './article.collection';
//#endregion

export class ArticleModel<E extends Article> extends ODataModel<E> {
  //#region ODataApi Properties
  UniqueId!: string;
  ArticleType!: ArticleType;
  ArticleTypeInt!: number;
  Title?: string;
  ReleaseTime!: Date;
  Url?: string;
  MetaDescription?: string;
  Image?: string;
  ImageAlt?: string;
  Category?: string;
  Photographer?: string;
  LeadText?: string;
  Body?: string;
  Footnote?: string;
  Errata?: ErrataListModel<ErrataList>;
  Authors?: string;
  Location?: string;
  ISSN?: string;
  ISBN?: string;
  TaxonomyTags?: string[];
  Themes?: string[];
  Series?: string[];
  References?: LinkListModel<LinkList>;
  Downloads?: LinkListModel<LinkList>;
  Links?: LinkListModel<LinkList>;
  Language?: string;
  Version!: number;
  SortOrder!: number;
  ItemNameLowerCase?: string;
  Updated!: Date;
  Created!: Date;
  Permalink?: string;
  //#endregion
  //#region ODataApi Setters
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}