import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { PlannerOrderHintsByAssignee } from './plannerorderhintsbyassignee.entity';
import { PlannerOrderHintsByAssigneeModel } from './plannerorderhintsbyassignee.model';
//#endregion

export class PlannerOrderHintsByAssigneeCollection<E extends PlannerOrderHintsByAssignee, M extends PlannerOrderHintsByAssigneeModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}