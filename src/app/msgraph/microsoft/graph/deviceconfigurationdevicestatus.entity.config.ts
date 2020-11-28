import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { DeviceConfigurationDeviceStatus } from './deviceconfigurationdevicestatus.entity';
import { DeviceConfigurationDeviceStatusModel } from './deviceconfigurationdevicestatus.model';
import { DeviceConfigurationDeviceStatusCollection } from './deviceconfigurationdevicestatus.collection';
//#endregion

export const DeviceConfigurationDeviceStatusConfig = {
  name: "deviceConfigurationDeviceStatus",
  base: "microsoft.graph.entity",
  model: DeviceConfigurationDeviceStatusModel,
  collection: DeviceConfigurationDeviceStatusCollection,
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
} as EntityConfig<DeviceConfigurationDeviceStatus>;