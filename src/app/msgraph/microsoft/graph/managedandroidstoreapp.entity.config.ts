import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ManagedAndroidStoreApp } from './managedandroidstoreapp.entity';
//#endregion

export const ManagedAndroidStoreAppConfig = {
  name: "managedAndroidStoreApp",
  base: "microsoft.graph.managedApp",
  annotations: [],
  fields: {
    packageId: {type: 'Edm.String'},
    appStoreUrl: {type: 'Edm.String', nullable: false},
    minimumSupportedOperatingSystem: {type: 'graph.androidMinimumOperatingSystem', nullable: false}
  }
} as EntityConfig<ManagedAndroidStoreApp>;