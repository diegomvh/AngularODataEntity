import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { PlannerUserIds } from './planneruserids.complex';
import { PlannerUserIdsModel } from './planneruserids.model';
//#endregion

export class PlannerUserIdsCollection<E extends PlannerUserIds, M extends PlannerUserIdsModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}