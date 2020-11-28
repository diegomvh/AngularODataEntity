import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { SearchHit } from './searchhit.complex';
import { SearchHitsContainer } from './searchhitscontainer.complex';
import { SearchHitModel } from './searchhit.model';
import { SearchHitsContainerModel } from './searchhitscontainer.model';
import { SearchHitCollection } from './searchhit.collection';
//#endregion

export class SearchHitsContainerCollection<E extends SearchHitsContainer, M extends SearchHitsContainerModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}