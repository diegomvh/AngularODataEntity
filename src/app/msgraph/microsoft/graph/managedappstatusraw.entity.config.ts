import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ManagedAppStatusRaw } from './managedappstatusraw.entity';
//#endregion

export const ManagedAppStatusRawConfig = {
  name: "managedAppStatusRaw",
  base: "microsoft.graph.managedAppStatus",
  annotations: [],
  fields: {
    content: {type: 'graph.Json'}
  }
} as EntityConfig<ManagedAppStatusRaw>;