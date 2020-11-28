import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { RoleAssignment } from './roleassignment.entity';
import { RoleAssignmentModel } from './roleassignment.model';
import { RoleAssignmentCollection } from './roleassignment.collection';
//#endregion

export const RoleAssignmentConfig = {
  name: "roleAssignment",
  base: "microsoft.graph.entity",
  model: RoleAssignmentModel,
  collection: RoleAssignmentCollection,
  annotations: [],
  fields: {
    description: {type: 'Edm.String'},
    displayName: {type: 'Edm.String'},
    resourceScopes: {type: 'Edm.String', collection: true},
    roleDefinition: {type: 'graph.roleDefinition', navigation: true}
  }
} as StructuredTypeConfig<RoleAssignment>;