import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ManagedAppStatus } from './managedappstatus.entity';
//#endregion

export const ManagedAppStatusConfig = {
  name: "ManagedAppStatus",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    displayName: {type: 'Edm.String'},
    version: {type: 'Edm.String'}
  }
} as EntityConfig<ManagedAppStatus>;