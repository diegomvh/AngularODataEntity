import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { MediaType } from './mediatype.enum';
import { Medium } from './medium.entity';
import { MediumCollection } from './medium.collection';
//#endregion

export class MediumModel<E extends Medium> extends ODataModel<E> {
  //#region ODataApi Properties
  UniqueId!: string;
  Title?: string;
  MediaType!: MediaType;
  MediaTypeInt!: number;
  ReleaseTime!: Date;
  Description?: string;
  LeadText?: string;
  Url?: string;
  MetaDescription?: string;
  TaxonomyTags?: string[];
  Themes?: string[];
  Series?: string[];
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