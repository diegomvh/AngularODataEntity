import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ManagedAndroidStoreApp } from './managedandroidstoreapp.entity';
import { ManagedAndroidStoreAppModel } from './managedandroidstoreapp.model';
import { ManagedAndroidStoreAppCollection } from './managedandroidstoreapp.collection';
//#endregion

export const ManagedAndroidStoreAppConfig = {
  name: "managedAndroidStoreApp",
  base: "microsoft.graph.managedApp",
  model: ManagedAndroidStoreAppModel,
  collection: ManagedAndroidStoreAppCollection,
  annotations: [],
  fields: {
    appStoreUrl: {type: 'Edm.String', nullable: false},
    minimumSupportedOperatingSystem: {type: 'graph.androidMinimumOperatingSystem', nullable: false},
    packageId: {type: 'Edm.String'}
  }
} as EntityConfig<ManagedAndroidStoreApp>;