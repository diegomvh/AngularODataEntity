import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { PageType } from './pagetype.enum';
import { LinkList } from './linklist.complex';
import { Page } from './page.entity';
import { LinkListModel } from './linklist.model';
import { LinkListCollection } from './linklist.collection';
import { PageCollection } from './page.collection';
//#endregion

export class PageModel<E extends Page> extends ODataModel<E> {
  //#region ODataApi Properties
  UniqueId!: string;
  PageType!: PageType;
  PageTypeInt!: number;
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
  References?: LinkListModel<LinkList>;
  Downloads?: LinkListModel<LinkList>;
  Links?: LinkListModel<LinkList>;
  Language?: string;
  Version!: number;
  SortOrder!: number;
  ItemNameLowerCase?: string;
  Updated!: Date;
  ReleaseTime!: Date;
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