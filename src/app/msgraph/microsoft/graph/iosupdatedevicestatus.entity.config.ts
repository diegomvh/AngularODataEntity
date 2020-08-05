import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { IosUpdateDeviceStatus } from './iosupdatedevicestatus.entity';
//#endregion

export const IosUpdateDeviceStatusConfig = {
  name: "IosUpdateDeviceStatus",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    installStatus: {type: 'graph.iosUpdatesInstallStatus', nullable: false},
    osVersion: {type: 'Edm.String'},
    deviceId: {type: 'Edm.String'},
    userId: {type: 'Edm.String'},
    deviceDisplayName: {type: 'Edm.String'},
    userName: {type: 'Edm.String'},
    deviceModel: {type: 'Edm.String'},
    complianceGracePeriodExpirationDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    status: {type: 'graph.complianceStatus', nullable: false},
    lastReportedDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    userPrincipalName: {type: 'Edm.String'}
  }
} as EntityConfig<IosUpdateDeviceStatus>;