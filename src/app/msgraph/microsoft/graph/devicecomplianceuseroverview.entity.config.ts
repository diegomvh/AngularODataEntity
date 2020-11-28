import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { DeviceComplianceUserOverview } from './devicecomplianceuseroverview.entity';
import { DeviceComplianceUserOverviewModel } from './devicecomplianceuseroverview.model';
import { DeviceComplianceUserOverviewCollection } from './devicecomplianceuseroverview.collection';
//#endregion

export const DeviceComplianceUserOverviewConfig = {
  name: "deviceComplianceUserOverview",
  base: "microsoft.graph.entity",
  model: DeviceComplianceUserOverviewModel,
  collection: DeviceComplianceUserOverviewCollection,
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
} as EntityConfig<DeviceComplianceUserOverview>;