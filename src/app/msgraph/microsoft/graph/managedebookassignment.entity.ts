import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { InstallIntent } from './installintent.enum';
import { DeviceAndAppManagementAssignmentTarget } from './deviceandappmanagementassignmenttarget.entity';
//#endregion

export interface ManagedEBookAssignment extends Entity {
  //#region ODataApi Properties
  target?: DeviceAndAppManagementAssignmentTarget;
  installIntent: InstallIntent;
  //#endregion
}