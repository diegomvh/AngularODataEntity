import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { DeviceAndAppManagementAssignmentTarget } from './deviceandappmanagementassignmenttarget.entity';
import { ManagedDeviceMobileAppConfigurationAssignment } from './manageddevicemobileappconfigurationassignment.entity';
import { DeviceAndAppManagementAssignmentTargetModel } from './deviceandappmanagementassignmenttarget.model';
import { ManagedDeviceMobileAppConfigurationAssignmentModel } from './manageddevicemobileappconfigurationassignment.model';
import { DeviceAndAppManagementAssignmentTargetCollection } from './deviceandappmanagementassignmenttarget.collection';
//#endregion

export class ManagedDeviceMobileAppConfigurationAssignmentCollection<E extends ManagedDeviceMobileAppConfigurationAssignment, M extends ManagedDeviceMobileAppConfigurationAssignmentModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}