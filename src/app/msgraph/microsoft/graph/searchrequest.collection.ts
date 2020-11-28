import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityType } from './entitytype.enum';
import { SearchQuery } from './searchquery.complex';
import { SearchRequest } from './searchrequest.complex';
import { SearchQueryModel } from './searchquery.model';
import { SearchRequestModel } from './searchrequest.model';
import { SearchQueryCollection } from './searchquery.collection';
//#endregion

export class SearchRequestCollection<E extends SearchRequest, M extends SearchRequestModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}