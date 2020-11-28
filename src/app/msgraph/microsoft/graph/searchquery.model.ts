import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { SearchQuery } from './searchquery.complex';
import { SearchQueryCollection } from './searchquery.collection';
//#endregion

export class SearchQueryModel<E extends SearchQuery> extends ODataModel<E> {
  //#region ODataApi Properties
  queryString: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}