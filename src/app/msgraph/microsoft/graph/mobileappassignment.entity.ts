import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { InstallIntent } from './installintent.enum';
import { DeviceAndAppManagementAssignmentTarget } from './deviceandappmanagementassignmenttarget.entity';
import { MobileAppAssignmentSettings } from './mobileappassignmentsettings.entity';
import { DeviceAndAppManagementAssignmentTargetModel } from './deviceandappmanagementassignmenttarget.model';
import { MobileAppAssignmentSettingsModel } from './mobileappassignmentsettings.model';
import { EntityModel } from './entity.model';
import { DeviceAndAppManagementAssignmentTargetCollection } from './deviceandappmanagementassignmenttarget.collection';
import { MobileAppAssignmentSettingsCollection } from './mobileappassignmentsettings.collection';
import { EntityCollection } from './entity.collection';
//#endregion

export interface MobileAppAssignment extends Entity {
  //#region ODataApi Properties
  intent: InstallIntent;
  settings?: MobileAppAssignmentSettings;
  target?: DeviceAndAppManagementAssignmentTarget;
  //#endregion
}