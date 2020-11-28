import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ManagedDeviceMobileAppConfigurationAssignment } from './manageddevicemobileappconfigurationassignment.entity';
import { ManagedDeviceMobileAppConfigurationAssignmentModel } from './manageddevicemobileappconfigurationassignment.model';
import { ManagedDeviceMobileAppConfigurationAssignmentCollection } from './manageddevicemobileappconfigurationassignment.collection';
//#endregion

export const ManagedDeviceMobileAppConfigurationAssignmentConfig = {
  name: "managedDeviceMobileAppConfigurationAssignment",
  base: "microsoft.graph.entity",
  model: ManagedDeviceMobileAppConfigurationAssignmentModel,
  collection: ManagedDeviceMobileAppConfigurationAssignmentCollection,
  annotations: [],
  fields: {
    target: {type: 'graph.deviceAndAppManagementAssignmentTarget'}
  }
} as StructuredTypeConfig<ManagedDeviceMobileAppConfigurationAssignment>;