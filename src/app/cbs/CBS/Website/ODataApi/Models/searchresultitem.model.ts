import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { SearchResultItem } from './searchresultitem.entity';
import { SearchResultItemCollection } from './searchresultitem.collection';
//#endregion

export class SearchResultItemModel<E extends SearchResultItem> extends ODataModel<E> {
  //#region ODataApi Properties
  UniqueId!: string;
  Type?: string;
  Permalink?: string;
  Title?: string;
  ReleaseTime!: Date;
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
  SortOrder!: number;
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