import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { InstallIntent } from './installintent.enum';
import { DeviceAndAppManagementAssignmentTarget } from './deviceandappmanagementassignmenttarget.entity';
import { MobileAppAssignmentSettings } from './mobileappassignmentsettings.entity';
//#endregion

export interface MobileAppAssignment extends Entity {
  //#region ODataApi Properties
  intent: InstallIntent;
  target?: DeviceAndAppManagementAssignmentTarget;
  settings?: MobileAppAssignmentSettings;
  //#endregion
}