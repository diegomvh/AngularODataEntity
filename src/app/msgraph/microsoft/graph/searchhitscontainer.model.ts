import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { SearchHit } from './searchhit.complex';
import { SearchHitsContainer } from './searchhitscontainer.complex';
import { SearchHitModel } from './searchhit.model';
import { SearchHitCollection } from './searchhit.collection';
import { SearchHitsContainerCollection } from './searchhitscontainer.collection';
//#endregion

export class SearchHitsContainerModel<E extends SearchHitsContainer> extends ODataModel<E> {
  //#region ODataApi Properties
  hits?: SearchHitCollection<SearchHit, SearchHitModel<SearchHit>>;
  moreResultsAvailable?: boolean;
  total?: number;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}