import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { RoleAssignment } from './roleassignment.entity';
import { RoleAssignmentModel } from './roleassignment.model';
import { RoleAssignmentCollection } from './roleassignment.collection';
//#endregion

export interface DeviceAndAppManagementRoleAssignment extends RoleAssignment {
  //#region ODataApi Properties
  members?: string[];
  //#endregion
}