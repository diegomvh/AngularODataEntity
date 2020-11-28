import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { DeviceComplianceDeviceStatus } from './devicecompliancedevicestatus.entity';
import { DeviceComplianceDeviceStatusModel } from './devicecompliancedevicestatus.model';
import { DeviceComplianceDeviceStatusCollection } from './devicecompliancedevicestatus.collection';
//#endregion

export const DeviceComplianceDeviceStatusConfig = {
  name: "deviceComplianceDeviceStatus",
  base: "microsoft.graph.entity",
  model: DeviceComplianceDeviceStatusModel,
  collection: DeviceComplianceDeviceStatusCollection,
  annotations: [],
  fields: {
    complianceGracePeriodExpirationDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    deviceDisplayName: {type: 'Edm.String'},
    deviceModel: {type: 'Edm.String'},
    lastReportedDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    status: {type: 'graph.complianceStatus', nullable: false},
    userName: {type: 'Edm.String'},
    userPrincipalName: {type: 'Edm.String'}
  }
} as EntityConfig<DeviceComplianceDeviceStatus>;