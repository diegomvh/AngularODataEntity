import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ManagedDeviceMobileAppConfiguration } from './manageddevicemobileappconfiguration.entity';
import { ManagedDeviceMobileAppConfigurationModel } from './manageddevicemobileappconfiguration.model';
import { ManagedDeviceMobileAppConfigurationCollection } from './manageddevicemobileappconfiguration.collection';
//#endregion

export const ManagedDeviceMobileAppConfigurationConfig = {
  name: "managedDeviceMobileAppConfiguration",
  base: "microsoft.graph.entity",
  model: ManagedDeviceMobileAppConfigurationModel,
  collection: ManagedDeviceMobileAppConfigurationCollection,
  annotations: [],
  fields: {
    createdDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    description: {type: 'Edm.String'},
    displayName: {type: 'Edm.String', nullable: false},
    lastModifiedDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    targetedMobileApps: {type: 'Edm.String', collection: true},
    version: {type: 'Edm.Int32', nullable: false},
    assignments: {type: 'graph.managedDeviceMobileAppConfigurationAssignment', collection: true, navigation: true},
    deviceStatuses: {type: 'graph.managedDeviceMobileAppConfigurationDeviceStatus', collection: true, navigation: true},
    deviceStatusSummary: {type: 'graph.managedDeviceMobileAppConfigurationDeviceSummary', navigation: true},
    userStatuses: {type: 'graph.managedDeviceMobileAppConfigurationUserStatus', collection: true, navigation: true},
    userStatusSummary: {type: 'graph.managedDeviceMobileAppConfigurationUserSummary', navigation: true}
  }
} as EntityConfig<ManagedDeviceMobileAppConfiguration>;