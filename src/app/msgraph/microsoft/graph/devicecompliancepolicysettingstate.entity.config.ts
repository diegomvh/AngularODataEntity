import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { DeviceCompliancePolicySettingState } from './devicecompliancepolicysettingstate.entity';
//#endregion

export const DeviceCompliancePolicySettingStateConfig = {
  name: "DeviceCompliancePolicySettingState",
  annotations: [],
  fields: {
    setting: {type: 'Edm.String'},
    settingName: {type: 'Edm.String'},
    instanceDisplayName: {type: 'Edm.String'},
    state: {type: 'graph.complianceStatus', nullable: false},
    errorCode: {type: 'Edm.Int64', nullable: false},
    errorDescription: {type: 'Edm.String'},
    userId: {type: 'Edm.String'},
    userName: {type: 'Edm.String'},
    userEmail: {type: 'Edm.String'},
    userPrincipalName: {type: 'Edm.String'},
    sources: {type: 'graph.settingSource', collection: true},
    currentValue: {type: 'Edm.String'}
  }
} as EntityConfig<DeviceCompliancePolicySettingState>;