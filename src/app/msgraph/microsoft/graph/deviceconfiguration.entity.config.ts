import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { DeviceConfiguration } from './deviceconfiguration.entity';
import { DeviceConfigurationModel } from './deviceconfiguration.model';
import { DeviceConfigurationCollection } from './deviceconfiguration.collection';
//#endregion

export const DeviceConfigurationConfig = {
  name: "deviceConfiguration",
  base: "microsoft.graph.entity",
  model: DeviceConfigurationModel,
  collection: DeviceConfigurationCollection,
  annotations: [],
  fields: {
    createdDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    description: {type: 'Edm.String'},
    displayName: {type: 'Edm.String', nullable: false},
    lastModifiedDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    version: {type: 'Edm.Int32', nullable: false},
    assignments: {type: 'graph.deviceConfigurationAssignment', collection: true, navigation: true},
    deviceSettingStateSummaries: {type: 'graph.settingStateDeviceSummary', collection: true, navigation: true},
    deviceStatuses: {type: 'graph.deviceConfigurationDeviceStatus', collection: true, navigation: true},
    deviceStatusOverview: {type: 'graph.deviceConfigurationDeviceOverview', navigation: true},
    userStatuses: {type: 'graph.deviceConfigurationUserStatus', collection: true, navigation: true},
    userStatusOverview: {type: 'graph.deviceConfigurationUserOverview', navigation: true}
  }
} as StructuredTypeConfig<DeviceConfiguration>;