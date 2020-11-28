import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ManagedAppStatusRaw } from './managedappstatusraw.entity';
import { ManagedAppStatusRawModel } from './managedappstatusraw.model';
import { ManagedAppStatusRawCollection } from './managedappstatusraw.collection';
//#endregion

export const ManagedAppStatusRawConfig = {
  name: "managedAppStatusRaw",
  base: "microsoft.graph.managedAppStatus",
  model: ManagedAppStatusRawModel,
  collection: ManagedAppStatusRawCollection,
  annotations: [],
  fields: {
    content: {type: 'graph.Json'}
  }
} as EntityConfig<ManagedAppStatusRaw>;