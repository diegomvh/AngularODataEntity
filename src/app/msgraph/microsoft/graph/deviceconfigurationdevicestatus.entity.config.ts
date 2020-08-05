import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { DeviceConfigurationDeviceStatus } from './deviceconfigurationdevicestatus.entity';
//#endregion

export const DeviceConfigurationDeviceStatusConfig = {
  name: "DeviceConfigurationDeviceStatus",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    deviceDisplayName: {type: 'Edm.String'},
    userName: {type: 'Edm.String'},
    deviceModel: {type: 'Edm.String'},
    complianceGracePeriodExpirationDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    status: {type: 'graph.complianceStatus', nullable: false},
    lastReportedDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    userPrincipalName: {type: 'Edm.String'}
  }
} as EntityConfig<DeviceConfigurationDeviceStatus>;