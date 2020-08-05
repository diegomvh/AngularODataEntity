import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { DeviceConfigurationAssignment } from './deviceconfigurationassignment.entity';
//#endregion

export const DeviceConfigurationAssignmentConfig = {
  name: "deviceConfigurationAssignment",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    target: {type: 'graph.deviceAndAppManagementAssignmentTarget'}
  }
} as EntityConfig<DeviceConfigurationAssignment>;