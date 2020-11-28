import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ManagedAndroidLobApp } from './managedandroidlobapp.entity';
import { ManagedAndroidLobAppModel } from './managedandroidlobapp.model';
import { ManagedAndroidLobAppCollection } from './managedandroidlobapp.collection';
//#endregion

export const ManagedAndroidLobAppConfig = {
  name: "managedAndroidLobApp",
  base: "microsoft.graph.managedMobileLobApp",
  model: ManagedAndroidLobAppModel,
  collection: ManagedAndroidLobAppCollection,
  annotations: [],
  fields: {
    minimumSupportedOperatingSystem: {type: 'graph.androidMinimumOperatingSystem'},
    packageId: {type: 'Edm.String'},
    versionCode: {type: 'Edm.String'},
    versionName: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<ManagedAndroidLobApp>;