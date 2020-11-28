import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Thumbnail } from './thumbnail.complex';
import { ThumbnailCollection } from './thumbnail.collection';
//#endregion

export class ThumbnailModel<E extends Thumbnail> extends ODataModel<E> {
  //#region ODataApi Properties
  content?: any;
  height?: number;
  sourceItemId?: string;
  url?: string;
  width?: number;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}