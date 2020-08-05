import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ManagedAppConfiguration } from './managedappconfiguration.entity';
//#endregion

export const ManagedAppConfigurationConfig = {
  name: "managedAppConfiguration",
  base: "microsoft.graph.managedAppPolicy",
  annotations: [],
  fields: {
    customSettings: {type: 'graph.keyValuePair', nullable: false, collection: true}
  }
} as EntityConfig<ManagedAppConfiguration>;