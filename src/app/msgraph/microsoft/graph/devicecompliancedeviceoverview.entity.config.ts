import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { DeviceComplianceDeviceOverview } from './devicecompliancedeviceoverview.entity';
//#endregion

export const DeviceComplianceDeviceOverviewConfig = {
  name: "deviceComplianceDeviceOverview",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    pendingCount: {type: 'Edm.Int32', nullable: false},
    notApplicableCount: {type: 'Edm.Int32', nullable: false},
    successCount: {type: 'Edm.Int32', nullable: false},
    errorCount: {type: 'Edm.Int32', nullable: false},
    failedCount: {type: 'Edm.Int32', nullable: false},
    lastUpdateDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    configurationVersion: {type: 'Edm.Int32', nullable: false}
  }
} as EntityConfig<DeviceComplianceDeviceOverview>;