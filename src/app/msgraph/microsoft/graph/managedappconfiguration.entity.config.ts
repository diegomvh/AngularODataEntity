import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ManagedAppConfiguration } from './managedappconfiguration.entity';
import { ManagedAppConfigurationModel } from './managedappconfiguration.model';
import { ManagedAppConfigurationCollection } from './managedappconfiguration.collection';
//#endregion

export const ManagedAppConfigurationConfig = {
  name: "managedAppConfiguration",
  base: "microsoft.graph.managedAppPolicy",
  model: ManagedAppConfigurationModel,
  collection: ManagedAppConfigurationCollection,
  annotations: [],
  fields: {
    customSettings: {type: 'graph.keyValuePair', nullable: false, collection: true}
  }
} as StructuredTypeConfig<ManagedAppConfiguration>;