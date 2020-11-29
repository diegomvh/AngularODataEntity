import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { InstallIntent } from './installintent.enum';
import { DeviceAndAppManagementAssignmentTarget } from './deviceandappmanagementassignmenttarget.complex';
import { MobileAppAssignmentSettings } from './mobileappassignmentsettings.complex';
import { MobileAppAssignment } from './mobileappassignment.entity';
import { DeviceAndAppManagementAssignmentTargetModel } from './deviceandappmanagementassignmenttarget.model';
import { MobileAppAssignmentSettingsModel } from './mobileappassignmentsettings.model';
import { DeviceAndAppManagementAssignmentTargetCollection } from './deviceandappmanagementassignmenttarget.collection';
import { MobileAppAssignmentSettingsCollection } from './mobileappassignmentsettings.collection';
import { MobileAppAssignmentCollection } from './mobileappassignment.collection';
//#endregion

export class MobileAppAssignmentModel<E extends MobileAppAssignment> extends EntityModel<E> {
  //#region ODataApi Properties
  intent: InstallIntent;
  settings?: MobileAppAssignmentSettingsModel<MobileAppAssignmentSettings>;
  _target?: DeviceAndAppManagementAssignmentTargetModel<DeviceAndAppManagementAssignmentTarget>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
