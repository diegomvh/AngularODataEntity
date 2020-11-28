import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { SearchRequest } from './searchrequest.complex';
import { SearchResponse } from './searchresponse.complex';
import { SearchEntity } from './searchentity.entity';
import { SearchRequestModel } from './searchrequest.model';
import { SearchResponseModel } from './searchresponse.model';
import { SearchEntityModel } from './searchentity.model';
import { SearchRequestCollection } from './searchrequest.collection';
import { SearchResponseCollection } from './searchresponse.collection';
//#endregion

export class SearchEntityCollection<E extends SearchEntity, M extends SearchEntityModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}