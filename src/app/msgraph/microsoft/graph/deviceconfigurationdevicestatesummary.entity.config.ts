import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { DeviceConfigurationDeviceStateSummary } from './deviceconfigurationdevicestatesummary.entity';
//#endregion

export const DeviceConfigurationDeviceStateSummaryConfig = {
  name: "DeviceConfigurationDeviceStateSummary",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    unknownDeviceCount: {type: 'Edm.Int32', nullable: false},
    notApplicableDeviceCount: {type: 'Edm.Int32', nullable: false},
    compliantDeviceCount: {type: 'Edm.Int32', nullable: false},
    remediatedDeviceCount: {type: 'Edm.Int32', nullable: false},
    nonCompliantDeviceCount: {type: 'Edm.Int32', nullable: false},
    errorDeviceCount: {type: 'Edm.Int32', nullable: false},
    conflictDeviceCount: {type: 'Edm.Int32', nullable: false}
  }
} as EntityConfig<DeviceConfigurationDeviceStateSummary>;