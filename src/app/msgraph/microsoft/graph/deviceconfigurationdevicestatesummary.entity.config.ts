import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { DeviceConfigurationDeviceStateSummary } from './deviceconfigurationdevicestatesummary.entity';
import { DeviceConfigurationDeviceStateSummaryModel } from './deviceconfigurationdevicestatesummary.model';
import { DeviceConfigurationDeviceStateSummaryCollection } from './deviceconfigurationdevicestatesummary.collection';
//#endregion

export const DeviceConfigurationDeviceStateSummaryConfig = {
  name: "deviceConfigurationDeviceStateSummary",
  base: "microsoft.graph.entity",
  model: DeviceConfigurationDeviceStateSummaryModel,
  collection: DeviceConfigurationDeviceStateSummaryCollection,
  annotations: [],
  fields: {
    compliantDeviceCount: {type: 'Edm.Int32', nullable: false},
    conflictDeviceCount: {type: 'Edm.Int32', nullable: false},
    errorDeviceCount: {type: 'Edm.Int32', nullable: false},
    nonCompliantDeviceCount: {type: 'Edm.Int32', nullable: false},
    notApplicableDeviceCount: {type: 'Edm.Int32', nullable: false},
    remediatedDeviceCount: {type: 'Edm.Int32', nullable: false},
    unknownDeviceCount: {type: 'Edm.Int32', nullable: false}
  }
} as StructuredTypeConfig<DeviceConfigurationDeviceStateSummary>;