import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { PlannerAssignments } from './plannerassignments.entity';
import { PlannerAssignmentsModel } from './plannerassignments.model';
//#endregion

export class PlannerAssignmentsCollection<E extends PlannerAssignments, M extends PlannerAssignmentsModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}