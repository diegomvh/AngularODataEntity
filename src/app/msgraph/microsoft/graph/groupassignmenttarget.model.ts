import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DeviceAndAppManagementAssignmentTargetModel } from './deviceandappmanagementassignmenttarget.model';
import { GroupAssignmentTarget } from './groupassignmenttarget.entity';
import { GroupAssignmentTargetCollection } from './groupassignmenttarget.collection';
//#endregion

export class GroupAssignmentTargetModel<E extends GroupAssignmentTarget> extends DeviceAndAppManagementAssignmentTargetModel<E> {
  //#region ODataApi Properties
  groupId?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}