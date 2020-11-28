import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ManagedDeviceMobileAppConfigurationDeviceSummary } from './manageddevicemobileappconfigurationdevicesummary.entity';
import { ManagedDeviceMobileAppConfigurationDeviceSummaryModel } from './manageddevicemobileappconfigurationdevicesummary.model';
import { ManagedDeviceMobileAppConfigurationDeviceSummaryCollection } from './manageddevicemobileappconfigurationdevicesummary.collection';
//#endregion

export const ManagedDeviceMobileAppConfigurationDeviceSummaryConfig = {
  name: "managedDeviceMobileAppConfigurationDeviceSummary",
  base: "microsoft.graph.entity",
  model: ManagedDeviceMobileAppConfigurationDeviceSummaryModel,
  collection: ManagedDeviceMobileAppConfigurationDeviceSummaryCollection,
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
} as StructuredTypeConfig<ManagedDeviceMobileAppConfigurationDeviceSummary>;