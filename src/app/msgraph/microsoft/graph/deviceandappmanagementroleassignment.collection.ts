import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { RoleAssignmentCollection } from './roleassignment.collection';
import { DeviceAndAppManagementRoleAssignment } from './deviceandappmanagementroleassignment.entity';
import { DeviceAndAppManagementRoleAssignmentModel } from './deviceandappmanagementroleassignment.model';
//#endregion

export class DeviceAndAppManagementRoleAssignmentCollection<E extends DeviceAndAppManagementRoleAssignment, M extends DeviceAndAppManagementRoleAssignmentModel<E>> extends RoleAssignmentCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}