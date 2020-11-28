import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ManagedAppStatus } from './managedappstatus.entity';
import { ManagedAppStatusModel } from './managedappstatus.model';
import { ManagedAppStatusCollection } from './managedappstatus.collection';
//#endregion

export const ManagedAppStatusConfig = {
  name: "managedAppStatus",
  base: "microsoft.graph.entity",
  model: ManagedAppStatusModel,
  collection: ManagedAppStatusCollection,
  annotations: [],
  fields: {
    displayName: {type: 'Edm.String'},
    version: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<ManagedAppStatus>;