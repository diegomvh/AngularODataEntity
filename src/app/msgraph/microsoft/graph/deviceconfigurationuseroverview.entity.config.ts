import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { DeviceConfigurationUserOverview } from './deviceconfigurationuseroverview.entity';
import { DeviceConfigurationUserOverviewModel } from './deviceconfigurationuseroverview.model';
import { DeviceConfigurationUserOverviewCollection } from './deviceconfigurationuseroverview.collection';
//#endregion

export const DeviceConfigurationUserOverviewConfig = {
  name: "deviceConfigurationUserOverview",
  base: "microsoft.graph.entity",
  model: DeviceConfigurationUserOverviewModel,
  collection: DeviceConfigurationUserOverviewCollection,
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
} as EntityConfig<DeviceConfigurationUserOverview>;