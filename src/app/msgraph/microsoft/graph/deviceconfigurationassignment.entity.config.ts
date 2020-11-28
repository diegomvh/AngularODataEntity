import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { DeviceConfigurationAssignment } from './deviceconfigurationassignment.entity';
import { DeviceConfigurationAssignmentModel } from './deviceconfigurationassignment.model';
import { DeviceConfigurationAssignmentCollection } from './deviceconfigurationassignment.collection';
//#endregion

export const DeviceConfigurationAssignmentConfig = {
  name: "deviceConfigurationAssignment",
  base: "microsoft.graph.entity",
  model: DeviceConfigurationAssignmentModel,
  collection: DeviceConfigurationAssignmentCollection,
  annotations: [],
  fields: {
    target: {type: 'graph.deviceAndAppManagementAssignmentTarget'}
  }
} as EntityConfig<DeviceConfigurationAssignment>;