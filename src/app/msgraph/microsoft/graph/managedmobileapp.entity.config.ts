import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ManagedMobileApp } from './managedmobileapp.entity';
import { ManagedMobileAppModel } from './managedmobileapp.model';
import { ManagedMobileAppCollection } from './managedmobileapp.collection';
//#endregion

export const ManagedMobileAppConfig = {
  name: "managedMobileApp",
  base: "microsoft.graph.entity",
  model: ManagedMobileAppModel,
  collection: ManagedMobileAppCollection,
  annotations: [],
  fields: {
    mobileAppIdentifier: {type: 'graph.mobileAppIdentifier'},
    version: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<ManagedMobileApp>;