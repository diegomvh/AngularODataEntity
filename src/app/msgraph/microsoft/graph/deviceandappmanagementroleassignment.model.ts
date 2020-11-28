import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { RoleAssignmentModel } from './roleassignment.model';
import { DeviceAndAppManagementRoleAssignment } from './deviceandappmanagementroleassignment.entity';
import { DeviceAndAppManagementRoleAssignmentCollection } from './deviceandappmanagementroleassignment.collection';
//#endregion

export class DeviceAndAppManagementRoleAssignmentModel<E extends DeviceAndAppManagementRoleAssignment> extends RoleAssignmentModel<E> {
  //#region ODataApi Properties
  members?: string[];
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}