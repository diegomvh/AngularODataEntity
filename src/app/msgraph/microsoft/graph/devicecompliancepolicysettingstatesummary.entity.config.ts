import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { DeviceCompliancePolicySettingStateSummary } from './devicecompliancepolicysettingstatesummary.entity';
import { DeviceCompliancePolicySettingStateSummaryModel } from './devicecompliancepolicysettingstatesummary.model';
import { DeviceCompliancePolicySettingStateSummaryCollection } from './devicecompliancepolicysettingstatesummary.collection';
//#endregion

export const DeviceCompliancePolicySettingStateSummaryConfig = {
  name: "deviceCompliancePolicySettingStateSummary",
  base: "microsoft.graph.entity",
  model: DeviceCompliancePolicySettingStateSummaryModel,
  collection: DeviceCompliancePolicySettingStateSummaryCollection,
  annotations: [],
  fields: {
    compliantDeviceCount: {type: 'Edm.Int32', nullable: false},
    conflictDeviceCount: {type: 'Edm.Int32', nullable: false},
    errorDeviceCount: {type: 'Edm.Int32', nullable: false},
    nonCompliantDeviceCount: {type: 'Edm.Int32', nullable: false},
    notApplicableDeviceCount: {type: 'Edm.Int32', nullable: false},
    platformType: {type: 'graph.policyPlatformType', nullable: false},
    remediatedDeviceCount: {type: 'Edm.Int32', nullable: false},
    setting: {type: 'Edm.String'},
    settingName: {type: 'Edm.String'},
    unknownDeviceCount: {type: 'Edm.Int32', nullable: false},
    deviceComplianceSettingStates: {type: 'graph.deviceComplianceSettingState', collection: true, navigation: true}
  }
} as EntityConfig<DeviceCompliancePolicySettingStateSummary>;