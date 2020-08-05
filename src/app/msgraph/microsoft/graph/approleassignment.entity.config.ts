import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { AppRoleAssignment } from './approleassignment.entity';
//#endregion

export const AppRoleAssignmentConfig = {
  name: "AppRoleAssignment",
  base: "microsoft.graph.directoryObject",
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
} as EntityConfig<AppRoleAssignment>;