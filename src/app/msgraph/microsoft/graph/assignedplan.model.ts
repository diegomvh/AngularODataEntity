import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { AssignedPlan } from './assignedplan.complex';
import { AssignedPlanCollection } from './assignedplan.collection';
//#endregion

export class AssignedPlanModel<E extends AssignedPlan> extends ODataModel<E> {
  //#region ODataApi Properties
  assignedDateTime?: Date;
  capabilityStatus?: string;
  service?: string;
  servicePlanId?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}