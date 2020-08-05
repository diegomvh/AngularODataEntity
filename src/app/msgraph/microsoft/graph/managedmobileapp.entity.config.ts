import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ManagedMobileApp } from './managedmobileapp.entity';
//#endregion

export const ManagedMobileAppConfig = {
  name: "ManagedMobileApp",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    mobileAppIdentifier: {type: 'graph.mobileAppIdentifier'},
    version: {type: 'Edm.String'}
  }
} as EntityConfig<ManagedMobileApp>;