import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { SearchQuery } from './searchquery.complex';
import { SearchQueryModel } from './searchquery.model';
//#endregion

export class SearchQueryCollection<E extends SearchQuery, M extends SearchQueryModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}