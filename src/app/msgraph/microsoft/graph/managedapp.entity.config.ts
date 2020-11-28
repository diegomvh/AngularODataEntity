import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ManagedApp } from './managedapp.entity';
import { ManagedAppModel } from './managedapp.model';
import { ManagedAppCollection } from './managedapp.collection';
//#endregion

export const ManagedAppConfig = {
  name: "managedApp",
  base: "microsoft.graph.mobileApp",
  model: ManagedAppModel,
  collection: ManagedAppCollection,
  annotations: [],
  fields: {
    appAvailability: {type: 'graph.managedAppAvailability', nullable: false},
    version: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<ManagedApp>;