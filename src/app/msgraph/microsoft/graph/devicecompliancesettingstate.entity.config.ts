import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { DeviceComplianceSettingState } from './devicecompliancesettingstate.entity';
import { DeviceComplianceSettingStateModel } from './devicecompliancesettingstate.model';
import { DeviceComplianceSettingStateCollection } from './devicecompliancesettingstate.collection';
//#endregion

export const DeviceComplianceSettingStateConfig = {
  name: "deviceComplianceSettingState",
  base: "microsoft.graph.entity",
  model: DeviceComplianceSettingStateModel,
  collection: DeviceComplianceSettingStateCollection,
  annotations: [],
  fields: {
    complianceGracePeriodExpirationDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    deviceId: {type: 'Edm.String'},
    deviceModel: {type: 'Edm.String'},
    deviceName: {type: 'Edm.String'},
    setting: {type: 'Edm.String'},
    settingName: {type: 'Edm.String'},
    state: {type: 'graph.complianceStatus', nullable: false},
    userEmail: {type: 'Edm.String'},
    userId: {type: 'Edm.String'},
    userName: {type: 'Edm.String'},
    userPrincipalName: {type: 'Edm.String'}
  }
} as EntityConfig<DeviceComplianceSettingState>;