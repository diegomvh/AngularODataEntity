import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { AssignedPlan } from './assignedplan.entity';
import { AssignedPlanModel } from './assignedplan.model';
//#endregion

export class AssignedPlanCollection<E extends AssignedPlan, M extends AssignedPlanModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}