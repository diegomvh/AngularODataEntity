import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { DeviceComplianceSettingState } from './devicecompliancesettingstate.entity';
//#endregion

export const DeviceComplianceSettingStateConfig = {
  name: "DeviceComplianceSettingState",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    setting: {type: 'Edm.String'},
    settingName: {type: 'Edm.String'},
    deviceId: {type: 'Edm.String'},
    deviceName: {type: 'Edm.String'},
    userId: {type: 'Edm.String'},
    userEmail: {type: 'Edm.String'},
    userName: {type: 'Edm.String'},
    userPrincipalName: {type: 'Edm.String'},
    deviceModel: {type: 'Edm.String'},
    state: {type: 'graph.complianceStatus', nullable: false},
    complianceGracePeriodExpirationDateTime: {type: 'Edm.DateTimeOffset', nullable: false}
  }
} as EntityConfig<DeviceComplianceSettingState>;