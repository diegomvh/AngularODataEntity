import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { RoleAssignment } from './roleassignment.entity';
//#endregion

export interface DeviceAndAppManagementRoleAssignment extends RoleAssignment {
  //#region ODataApi Properties
  members?: string[];
  //#endregion
}