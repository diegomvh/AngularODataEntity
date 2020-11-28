import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { SearchRequest } from './searchrequest.complex';
import { SearchResponse } from './searchresponse.complex';
import { SearchEntity } from './searchentity.entity';
import { SearchRequestModel } from './searchrequest.model';
import { SearchResponseModel } from './searchresponse.model';
import { SearchRequestCollection } from './searchrequest.collection';
import { SearchResponseCollection } from './searchresponse.collection';
import { SearchEntityCollection } from './searchentity.collection';
//#endregion

export class SearchEntityModel<E extends SearchEntity> extends EntityModel<E> {
  //#region ODataApi Properties
  //#endregion
  //#region ODataApi Actions
  public query(requests: SearchRequest[], options?: HttpOptions): Observable<SearchResponseCollection<SearchResponse, SearchResponseModel<SearchResponse>>> {
    var res = this._action<{requests: SearchRequest[]}, SearchResponse>('microsoft.graph.query');
    res.segment.entitySet('');
    return res.call({requests}, 'collection', options) as Observable<SearchResponseCollection<SearchResponse, SearchResponseModel<SearchResponse>>>;
  }
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}