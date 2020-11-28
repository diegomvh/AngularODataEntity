import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { GroupAssignmentTargetModel } from './groupassignmenttarget.model';
import { ExclusionGroupAssignmentTarget } from './exclusiongroupassignmenttarget.complex';
import { ExclusionGroupAssignmentTargetCollection } from './exclusiongroupassignmenttarget.collection';
//#endregion

export class ExclusionGroupAssignmentTargetModel<E extends ExclusionGroupAssignmentTarget> extends GroupAssignmentTargetModel<E> {
  //#region ODataApi Properties
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}