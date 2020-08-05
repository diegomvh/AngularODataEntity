import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { DeviceAndAppManagementAssignmentTarget } from './deviceandappmanagementassignmenttarget.entity';
//#endregion

export interface GroupAssignmentTarget extends DeviceAndAppManagementAssignmentTarget {
  //#region ODataApi Properties
  groupId?: string;
  //#endregion
}