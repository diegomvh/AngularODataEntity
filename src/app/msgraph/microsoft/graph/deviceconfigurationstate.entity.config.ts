import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { DeviceConfigurationState } from './deviceconfigurationstate.entity';
import { DeviceConfigurationStateModel } from './deviceconfigurationstate.model';
import { DeviceConfigurationStateCollection } from './deviceconfigurationstate.collection';
//#endregion

export const DeviceConfigurationStateConfig = {
  name: "deviceConfigurationState",
  base: "microsoft.graph.entity",
  model: DeviceConfigurationStateModel,
  collection: DeviceConfigurationStateCollection,
  annotations: [],
  fields: {
    displayName: {type: 'Edm.String'},
    platformType: {type: 'graph.policyPlatformType', nullable: false},
    settingCount: {type: 'Edm.Int32', nullable: false},
    settingStates: {type: 'graph.deviceConfigurationSettingState', collection: true},
    state: {type: 'graph.complianceStatus', nullable: false},
    version: {type: 'Edm.Int32', nullable: false}
  }
} as EntityConfig<DeviceConfigurationState>;