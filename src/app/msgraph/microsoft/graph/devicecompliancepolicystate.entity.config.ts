import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { DeviceCompliancePolicyState } from './devicecompliancepolicystate.entity';
import { DeviceCompliancePolicyStateModel } from './devicecompliancepolicystate.model';
import { DeviceCompliancePolicyStateCollection } from './devicecompliancepolicystate.collection';
//#endregion

export const DeviceCompliancePolicyStateConfig = {
  name: "deviceCompliancePolicyState",
  base: "microsoft.graph.entity",
  model: DeviceCompliancePolicyStateModel,
  collection: DeviceCompliancePolicyStateCollection,
  annotations: [],
  fields: {
    displayName: {type: 'Edm.String'},
    platformType: {type: 'graph.policyPlatformType', nullable: false},
    settingCount: {type: 'Edm.Int32', nullable: false},
    settingStates: {type: 'graph.deviceCompliancePolicySettingState', collection: true},
    state: {type: 'graph.complianceStatus', nullable: false},
    version: {type: 'Edm.Int32', nullable: false}
  }
} as StructuredTypeConfig<DeviceCompliancePolicyState>;