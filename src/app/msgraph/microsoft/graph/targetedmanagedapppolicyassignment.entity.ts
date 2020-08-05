import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { DeviceAndAppManagementAssignmentTarget } from './deviceandappmanagementassignmenttarget.entity';
//#endregion

export interface TargetedManagedAppPolicyAssignment extends Entity {
  //#region ODataApi Properties
  target?: DeviceAndAppManagementAssignmentTarget;
  //#endregion
}