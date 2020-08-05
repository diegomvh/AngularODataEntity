import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { RoleDefinition } from './roledefinition.entity';
//#endregion

export const RoleDefinitionConfig = {
  name: "RoleDefinition",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    displayName: {type: 'Edm.String'},
    description: {type: 'Edm.String'},
    rolePermissions: {type: 'graph.rolePermission', collection: true},
    isBuiltIn: {type: 'Edm.Boolean', nullable: false},
    roleAssignments: {type: 'graph.roleAssignment', collection: true, navigation: true}
  }
} as EntityConfig<RoleDefinition>;