import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { DeviceConfigurationState } from './deviceconfigurationstate.entity';
//#endregion

export const DeviceConfigurationStateConfig = {
  name: "DeviceConfigurationState",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    settingStates: {type: 'graph.deviceConfigurationSettingState', collection: true},
    displayName: {type: 'Edm.String'},
    version: {type: 'Edm.Int32', nullable: false},
    platformType: {type: 'graph.policyPlatformType', nullable: false},
    state: {type: 'graph.complianceStatus', nullable: false},
    settingCount: {type: 'Edm.Int32', nullable: false}
  }
} as EntityConfig<DeviceConfigurationState>;