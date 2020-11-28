import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { AppRoleAssignment } from './approleassignment.entity';
import { AppRoleAssignmentModel } from './approleassignment.model';
import { AppRoleAssignmentCollection } from './approleassignment.collection';
//#endregion

export const AppRoleAssignmentConfig = {
  name: "appRoleAssignment",
  base: "microsoft.graph.directoryObject",
  model: AppRoleAssignmentModel,
  collection: AppRoleAssignmentCollection,
  annotations: [],
  fields: {
    appRoleId: {type: 'Edm.Guid', nullable: false},
    createdDateTime: {type: 'Edm.DateTimeOffset'},
    principalDisplayName: {type: 'Edm.String'},
    principalId: {type: 'Edm.Guid'},
    principalType: {type: 'Edm.String'},
    resourceDisplayName: {type: 'Edm.String'},
    resourceId: {type: 'Edm.Guid'}
  }
} as StructuredTypeConfig<AppRoleAssignment>;