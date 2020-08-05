import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { RoleAssignment } from './roleassignment.entity';
//#endregion

export const RoleAssignmentConfig = {
  name: "roleAssignment",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    displayName: {type: 'Edm.String'},
    description: {type: 'Edm.String'},
    resourceScopes: {type: 'Edm.String', collection: true},
    roleDefinition: {type: 'graph.roleDefinition', navigation: true}
  }
} as EntityConfig<RoleAssignment>;