import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { PlannerAssignments } from './plannerassignments.entity';
import { PlannerAssignmentsCollection } from './plannerassignments.collection';
//#endregion

export class PlannerAssignmentsModel<E extends PlannerAssignments> extends ODataModel<E> {
  //#region ODataApi Properties
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}