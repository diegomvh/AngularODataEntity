import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { SearchHit } from './searchhit.complex';
import { SearchHitCollection } from './searchhit.collection';
//#endregion

export class SearchHitModel<E extends SearchHit> extends ODataModel<E> {
  //#region ODataApi Properties
  contentSource?: string;
  hitId?: string;
  rank?: number;
  summary?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}