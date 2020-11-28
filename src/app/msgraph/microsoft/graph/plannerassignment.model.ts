import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { IdentitySet } from './identityset.complex';
import { PlannerAssignment } from './plannerassignment.complex';
import { IdentitySetModel } from './identityset.model';
import { IdentitySetCollection } from './identityset.collection';
import { PlannerAssignmentCollection } from './plannerassignment.collection';
//#endregion

export class PlannerAssignmentModel<E extends PlannerAssignment> extends ODataModel<E> {
  //#region ODataApi Properties
  assignedBy?: IdentitySetModel<IdentitySet>;
  assignedDateTime?: Date;
  orderHint?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}