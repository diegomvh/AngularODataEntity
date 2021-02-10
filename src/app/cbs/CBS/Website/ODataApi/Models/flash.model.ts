import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Flash } from './flash.entity';
import { FlashCollection } from './flash.collection';
//#endregion

export class FlashModel<E extends Flash> extends ODataModel<E> {
  //#region ODataApi Properties
  UniqueId!: string;
  Title?: string;
  ReleaseTime!: Date;
  Description?: string;
  LeadText?: string;
  Url?: string;
  MetaDescription?: string;
  Language?: string;
  Version!: number;
  SortOrder!: number;
  ItemNameLowerCase?: string;
  Updated!: Date;
  Created!: Date;
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