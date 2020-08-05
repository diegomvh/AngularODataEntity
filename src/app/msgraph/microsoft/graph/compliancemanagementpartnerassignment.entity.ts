import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { DeviceAndAppManagementAssignmentTarget } from './deviceandappmanagementassignmenttarget.entity';
//#endregion

export interface ComplianceManagementPartnerAssignment {
  //#region ODataApi Properties
  target?: DeviceAndAppManagementAssignmentTarget;
  //#endregion
}