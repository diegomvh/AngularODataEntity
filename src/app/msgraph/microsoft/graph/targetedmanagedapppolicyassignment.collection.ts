import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { DeviceAndAppManagementAssignmentTarget } from './deviceandappmanagementassignmenttarget.entity';
import { TargetedManagedAppPolicyAssignment } from './targetedmanagedapppolicyassignment.entity';
import { DeviceAndAppManagementAssignmentTargetModel } from './deviceandappmanagementassignmenttarget.model';
import { TargetedManagedAppPolicyAssignmentModel } from './targetedmanagedapppolicyassignment.model';
import { DeviceAndAppManagementAssignmentTargetCollection } from './deviceandappmanagementassignmenttarget.collection';
//#endregion

export class TargetedManagedAppPolicyAssignmentCollection<E extends TargetedManagedAppPolicyAssignment, M extends TargetedManagedAppPolicyAssignmentModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}