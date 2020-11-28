import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { IosUpdateDeviceStatus } from './iosupdatedevicestatus.entity';
import { IosUpdateDeviceStatusModel } from './iosupdatedevicestatus.model';
import { IosUpdateDeviceStatusCollection } from './iosupdatedevicestatus.collection';
//#endregion

export const IosUpdateDeviceStatusConfig = {
  name: "iosUpdateDeviceStatus",
  base: "microsoft.graph.entity",
  model: IosUpdateDeviceStatusModel,
  collection: IosUpdateDeviceStatusCollection,
  annotations: [],
  fields: {
    complianceGracePeriodExpirationDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    deviceDisplayName: {type: 'Edm.String'},
    deviceId: {type: 'Edm.String'},
    deviceModel: {type: 'Edm.String'},
    installStatus: {type: 'graph.iosUpdatesInstallStatus', nullable: false},
    lastReportedDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    osVersion: {type: 'Edm.String'},
    status: {type: 'graph.complianceStatus', nullable: false},
    userId: {type: 'Edm.String'},
    userName: {type: 'Edm.String'},
    userPrincipalName: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<IosUpdateDeviceStatus>;