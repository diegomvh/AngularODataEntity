import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ManagedDeviceMobileAppConfiguration } from './manageddevicemobileappconfiguration.entity';
//#endregion

export const ManagedDeviceMobileAppConfigurationConfig = {
  name: "managedDeviceMobileAppConfiguration",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    targetedMobileApps: {type: 'Edm.String', collection: true},
    createdDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    description: {type: 'Edm.String'},
    lastModifiedDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    displayName: {type: 'Edm.String', nullable: false},
    version: {type: 'Edm.Int32', nullable: false},
    assignments: {type: 'graph.managedDeviceMobileAppConfigurationAssignment', collection: true, navigation: true},
    deviceStatuses: {type: 'graph.managedDeviceMobileAppConfigurationDeviceStatus', collection: true, navigation: true},
    userStatuses: {type: 'graph.managedDeviceMobileAppConfigurationUserStatus', collection: true, navigation: true},
    deviceStatusSummary: {type: 'graph.managedDeviceMobileAppConfigurationDeviceSummary', navigation: true},
    userStatusSummary: {type: 'graph.managedDeviceMobileAppConfigurationUserSummary', navigation: true}
  }
} as EntityConfig<ManagedDeviceMobileAppConfiguration>;