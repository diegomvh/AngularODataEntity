import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { IdentitySet } from './identityset.complex';
import { PlannerAssignment } from './plannerassignment.complex';
import { IdentitySetModel } from './identityset.model';
import { PlannerAssignmentModel } from './plannerassignment.model';
import { IdentitySetCollection } from './identityset.collection';
//#endregion

export class PlannerAssignmentCollection<E extends PlannerAssignment, M extends PlannerAssignmentModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}