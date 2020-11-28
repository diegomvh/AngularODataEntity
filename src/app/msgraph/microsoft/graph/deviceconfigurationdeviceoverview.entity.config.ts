import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { DeviceConfigurationDeviceOverview } from './deviceconfigurationdeviceoverview.entity';
import { DeviceConfigurationDeviceOverviewModel } from './deviceconfigurationdeviceoverview.model';
import { DeviceConfigurationDeviceOverviewCollection } from './deviceconfigurationdeviceoverview.collection';
//#endregion

export const DeviceConfigurationDeviceOverviewConfig = {
  name: "deviceConfigurationDeviceOverview",
  base: "microsoft.graph.entity",
  model: DeviceConfigurationDeviceOverviewModel,
  collection: DeviceConfigurationDeviceOverviewCollection,
  annotations: [],
  fields: {
    configurationVersion: {type: 'Edm.Int32', nullable: false},
    errorCount: {type: 'Edm.Int32', nullable: false},
    failedCount: {type: 'Edm.Int32', nullable: false},
    lastUpdateDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    notApplicableCount: {type: 'Edm.Int32', nullable: false},
    pendingCount: {type: 'Edm.Int32', nullable: false},
    successCount: {type: 'Edm.Int32', nullable: false}
  }
} as StructuredTypeConfig<DeviceConfigurationDeviceOverview>;