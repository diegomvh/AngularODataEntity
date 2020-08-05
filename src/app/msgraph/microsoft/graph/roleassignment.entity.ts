import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { RoleDefinition } from './roledefinition.entity';
//#endregion

export interface RoleAssignment extends Entity {
  //#region ODataApi Properties
  displayName?: string;
  description?: string;
  resourceScopes?: string[];
  roleDefinition?: RoleDefinition;
  //#endregion
}