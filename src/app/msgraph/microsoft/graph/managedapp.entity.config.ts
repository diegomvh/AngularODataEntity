import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ManagedApp } from './managedapp.entity';
//#endregion

export const ManagedAppConfig = {
  name: "managedApp",
  base: "microsoft.graph.mobileApp",
  annotations: [],
  fields: {
    appAvailability: {type: 'graph.managedAppAvailability', nullable: false},
    version: {type: 'Edm.String'}
  }
} as EntityConfig<ManagedApp>;