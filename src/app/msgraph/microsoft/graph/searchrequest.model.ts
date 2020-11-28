import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityType } from './entitytype.enum';
import { SearchQuery } from './searchquery.complex';
import { SearchRequest } from './searchrequest.complex';
import { SearchQueryModel } from './searchquery.model';
import { SearchQueryCollection } from './searchquery.collection';
import { SearchRequestCollection } from './searchrequest.collection';
//#endregion

export class SearchRequestModel<E extends SearchRequest> extends ODataModel<E> {
  //#region ODataApi Properties
  contentSources?: string[];
  enableTopResults?: boolean;
  entityTypes?: EntityType;
  fields?: string[];
  from: number;
  query: SearchQueryModel<SearchQuery>;
  size: number;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}