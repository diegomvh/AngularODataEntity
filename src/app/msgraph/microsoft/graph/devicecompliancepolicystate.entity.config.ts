import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { DeviceCompliancePolicyState } from './devicecompliancepolicystate.entity';
//#endregion

export const DeviceCompliancePolicyStateConfig = {
  name: "DeviceCompliancePolicyState",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    settingStates: {type: 'graph.deviceCompliancePolicySettingState', collection: true},
    displayName: {type: 'Edm.String'},
    version: {type: 'Edm.Int32', nullable: false},
    platformType: {type: 'graph.policyPlatformType', nullable: false},
    state: {type: 'graph.complianceStatus', nullable: false},
    settingCount: {type: 'Edm.Int32', nullable: false}
  }
} as EntityConfig<DeviceCompliancePolicyState>;