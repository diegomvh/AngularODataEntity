import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { PlannerChecklistItems } from './plannerchecklistitems.complex';
import { PlannerChecklistItemsModel } from './plannerchecklistitems.model';
//#endregion

export class PlannerChecklistItemsCollection<E extends PlannerChecklistItems, M extends PlannerChecklistItemsModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}