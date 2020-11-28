import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { DeviceAndAppManagementAssignmentTarget } from './deviceandappmanagementassignmenttarget.entity';
import { ManagedDeviceMobileAppConfigurationAssignment } from './manageddevicemobileappconfigurationassignment.entity';
import { DeviceAndAppManagementAssignmentTargetModel } from './deviceandappmanagementassignmenttarget.model';
import { DeviceAndAppManagementAssignmentTargetCollection } from './deviceandappmanagementassignmenttarget.collection';
import { ManagedDeviceMobileAppConfigurationAssignmentCollection } from './manageddevicemobileappconfigurationassignment.collection';
//#endregion

export class ManagedDeviceMobileAppConfigurationAssignmentModel<E extends ManagedDeviceMobileAppConfigurationAssignment> extends EntityModel<E> {
  //#region ODataApi Properties
  target?: DeviceAndAppManagementAssignmentTargetModel<DeviceAndAppManagementAssignmentTarget>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}