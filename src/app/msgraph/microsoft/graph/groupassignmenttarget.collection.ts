import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DeviceAndAppManagementAssignmentTargetCollection } from './deviceandappmanagementassignmenttarget.collection';
import { GroupAssignmentTarget } from './groupassignmenttarget.complex';
import { GroupAssignmentTargetModel } from './groupassignmenttarget.model';
//#endregion

export class GroupAssignmentTargetCollection<E extends GroupAssignmentTarget, M extends GroupAssignmentTargetModel<E>> extends DeviceAndAppManagementAssignmentTargetCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}