import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { SearchHitsContainer } from './searchhitscontainer.complex';
import { SearchResponse } from './searchresponse.complex';
import { SearchHitsContainerModel } from './searchhitscontainer.model';
import { SearchResponseModel } from './searchresponse.model';
import { SearchHitsContainerCollection } from './searchhitscontainer.collection';
//#endregion

export class SearchResponseCollection<E extends SearchResponse, M extends SearchResponseModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}