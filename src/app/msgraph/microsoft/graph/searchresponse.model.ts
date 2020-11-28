import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { SearchHitsContainer } from './searchhitscontainer.complex';
import { SearchResponse } from './searchresponse.complex';
import { SearchHitsContainerModel } from './searchhitscontainer.model';
import { SearchHitsContainerCollection } from './searchhitscontainer.collection';
import { SearchResponseCollection } from './searchresponse.collection';
//#endregion

export class SearchResponseModel<E extends SearchResponse> extends ODataModel<E> {
  //#region ODataApi Properties
  hitsContainers?: SearchHitsContainerCollection<SearchHitsContainer, SearchHitsContainerModel<SearchHitsContainer>>;
  searchTerms?: string[];
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}