import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { RolePermission } from './rolepermission.entity';
import { RoleAssignment } from './roleassignment.entity';
import { RolePermissionModel } from './rolepermission.model';
import { EntityModel } from './entity.model';
import { RoleAssignmentModel } from './roleassignment.model';
import { RolePermissionCollection } from './rolepermission.collection';
import { EntityCollection } from './entity.collection';
import { RoleAssignmentCollection } from './roleassignment.collection';
//#endregion

export interface RoleDefinition extends Entity {
  //#region ODataApi Properties
  description?: string;
  displayName?: string;
  isBuiltIn: boolean;
  rolePermissions?: RolePermission[];
  roleAssignments?: RoleAssignment[];
  //#endregion
}