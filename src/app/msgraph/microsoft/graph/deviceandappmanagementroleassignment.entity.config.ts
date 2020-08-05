import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { DeviceAndAppManagementRoleAssignment } from './deviceandappmanagementroleassignment.entity';
//#endregion

export const DeviceAndAppManagementRoleAssignmentConfig = {
  name: "DeviceAndAppManagementRoleAssignment",
  base: "microsoft.graph.roleAssignment",
  annotations: [],
  fields: {
    members: {type: 'Edm.String', collection: true}
  }
} as EntityConfig<DeviceAndAppManagementRoleAssignment>;