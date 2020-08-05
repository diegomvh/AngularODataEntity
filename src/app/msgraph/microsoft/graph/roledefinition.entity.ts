import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { RolePermission } from './rolepermission.entity';
import { RoleAssignment } from './roleassignment.entity';
//#endregion

export interface RoleDefinition extends Entity {
  //#region ODataApi Properties
  displayName?: string;
  description?: string;
  rolePermissions?: RolePermission[];
  isBuiltIn: boolean;
  roleAssignments?: RoleAssignment[];
  //#endregion
}