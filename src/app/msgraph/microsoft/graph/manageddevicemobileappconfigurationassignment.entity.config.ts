﻿import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ManagedDeviceMobileAppConfigurationAssignment } from './manageddevicemobileappconfigurationassignment.entity';
//#endregion

export const ManagedDeviceMobileAppConfigurationAssignmentConfig = {
  name: "managedDeviceMobileAppConfigurationAssignment",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    target: {type: 'graph.deviceAndAppManagementAssignmentTarget'}
  }
} as EntityConfig<ManagedDeviceMobileAppConfigurationAssignment>;