import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { RoleDefinition } from './roledefinition.entity';
import { EntityModel } from './entity.model';
import { RoleDefinitionModel } from './roledefinition.model';
import { EntityCollection } from './entity.collection';
import { RoleDefinitionCollection } from './roledefinition.collection';
//#endregion

export interface RoleAssignment extends Entity {
  //#region ODataApi Properties
  description?: string;
  displayName?: string;
  resourceScopes?: string[];
  roleDefinition?: RoleDefinition;
  //#endregion
}