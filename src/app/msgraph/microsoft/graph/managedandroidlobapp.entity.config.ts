import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ManagedAndroidLobApp } from './managedandroidlobapp.entity';
//#endregion

export const ManagedAndroidLobAppConfig = {
  name: "ManagedAndroidLobApp",
  base: "microsoft.graph.managedMobileLobApp",
  annotations: [],
  fields: {
    packageId: {type: 'Edm.String'},
    minimumSupportedOperatingSystem: {type: 'graph.androidMinimumOperatingSystem'},
    versionName: {type: 'Edm.String'},
    versionCode: {type: 'Edm.String'}
  }
} as EntityConfig<ManagedAndroidLobApp>;