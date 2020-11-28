import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { DeviceAndAppManagementRoleAssignment } from './deviceandappmanagementroleassignment.entity';
import { DeviceAndAppManagementRoleAssignmentModel } from './deviceandappmanagementroleassignment.model';
import { DeviceAndAppManagementRoleAssignmentCollection } from './deviceandappmanagementroleassignment.collection';
//#endregion

export const DeviceAndAppManagementRoleAssignmentConfig = {
  name: "deviceAndAppManagementRoleAssignment",
  base: "microsoft.graph.roleAssignment",
  model: DeviceAndAppManagementRoleAssignmentModel,
  collection: DeviceAndAppManagementRoleAssignmentCollection,
  annotations: [],
  fields: {
    members: {type: 'Edm.String', collection: true}
  }
} as StructuredTypeConfig<DeviceAndAppManagementRoleAssignment>;