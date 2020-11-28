import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { SearchResult } from './searchresult.complex';
import { SearchResultCollection } from './searchresult.collection';
//#endregion

export class SearchResultModel<E extends SearchResult> extends ODataModel<E> {
  //#region ODataApi Properties
  onClickTelemetryUrl?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}