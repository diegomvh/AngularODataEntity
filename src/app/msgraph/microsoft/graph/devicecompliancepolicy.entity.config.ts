import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { DeviceCompliancePolicy } from './devicecompliancepolicy.entity';
import { DeviceCompliancePolicyModel } from './devicecompliancepolicy.model';
import { DeviceCompliancePolicyCollection } from './devicecompliancepolicy.collection';
//#endregion

export const DeviceCompliancePolicyConfig = {
  name: "deviceCompliancePolicy",
  base: "microsoft.graph.entity",
  model: DeviceCompliancePolicyModel,
  collection: DeviceCompliancePolicyCollection,
  annotations: [],
  fields: {
    createdDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    description: {type: 'Edm.String'},
    displayName: {type: 'Edm.String', nullable: false},
    lastModifiedDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    version: {type: 'Edm.Int32', nullable: false},
    assignments: {type: 'graph.deviceCompliancePolicyAssignment', collection: true, navigation: true},
    deviceSettingStateSummaries: {type: 'graph.settingStateDeviceSummary', collection: true, navigation: true},
    deviceStatuses: {type: 'graph.deviceComplianceDeviceStatus', collection: true, navigation: true},
    deviceStatusOverview: {type: 'graph.deviceComplianceDeviceOverview', navigation: true},
    scheduledActionsForRule: {type: 'graph.deviceComplianceScheduledActionForRule', collection: true, navigation: true},
    userStatuses: {type: 'graph.deviceComplianceUserStatus', collection: true, navigation: true},
    userStatusOverview: {type: 'graph.deviceComplianceUserOverview', navigation: true}
  }
} as EntityConfig<DeviceCompliancePolicy>;