import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { RoleDefinition } from './roledefinition.entity';
import { RoleDefinitionModel } from './roledefinition.model';
import { RoleDefinitionCollection } from './roledefinition.collection';
//#endregion

export const RoleDefinitionConfig = {
  name: "roleDefinition",
  base: "microsoft.graph.entity",
  model: RoleDefinitionModel,
  collection: RoleDefinitionCollection,
  annotations: [],
  fields: {
    description: {type: 'Edm.String'},
    displayName: {type: 'Edm.String'},
    isBuiltIn: {type: 'Edm.Boolean', nullable: false},
    rolePermissions: {type: 'graph.rolePermission', collection: true},
    roleAssignments: {type: 'graph.roleAssignment', collection: true, navigation: true}
  }
} as EntityConfig<RoleDefinition>;