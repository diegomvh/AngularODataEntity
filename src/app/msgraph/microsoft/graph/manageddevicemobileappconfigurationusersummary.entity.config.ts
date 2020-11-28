import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ManagedDeviceMobileAppConfigurationUserSummary } from './manageddevicemobileappconfigurationusersummary.entity';
import { ManagedDeviceMobileAppConfigurationUserSummaryModel } from './manageddevicemobileappconfigurationusersummary.model';
import { ManagedDeviceMobileAppConfigurationUserSummaryCollection } from './manageddevicemobileappconfigurationusersummary.collection';
//#endregion

export const ManagedDeviceMobileAppConfigurationUserSummaryConfig = {
  name: "managedDeviceMobileAppConfigurationUserSummary",
  base: "microsoft.graph.entity",
  model: ManagedDeviceMobileAppConfigurationUserSummaryModel,
  collection: ManagedDeviceMobileAppConfigurationUserSummaryCollection,
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
} as EntityConfig<ManagedDeviceMobileAppConfigurationUserSummary>;