import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { DeviceCompliancePolicySettingState } from './devicecompliancepolicysettingstate.complex';
import { DeviceCompliancePolicySettingStateModel } from './devicecompliancepolicysettingstate.model';
import { DeviceCompliancePolicySettingStateCollection } from './devicecompliancepolicysettingstate.collection';
//#endregion

export const DeviceCompliancePolicySettingStateConfig = {
  name: "deviceCompliancePolicySettingState",
  model: DeviceCompliancePolicySettingStateModel,
  collection: DeviceCompliancePolicySettingStateCollection,
  annotations: [],
  fields: {
    currentValue: {type: 'Edm.String'},
    errorCode: {type: 'Edm.Int64', nullable: false},
    errorDescription: {type: 'Edm.String'},
    instanceDisplayName: {type: 'Edm.String'},
    setting: {type: 'Edm.String'},
    settingName: {type: 'Edm.String'},
    sources: {type: 'graph.settingSource', collection: true},
    state: {type: 'graph.complianceStatus', nullable: false},
    userEmail: {type: 'Edm.String'},
    userId: {type: 'Edm.String'},
    userName: {type: 'Edm.String'},
    userPrincipalName: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<DeviceCompliancePolicySettingState>;