import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { AndroidLobApp } from './androidlobapp.entity';
//#endregion

export const AndroidLobAppConfig = {
  name: "AndroidLobApp",
  base: "microsoft.graph.mobileLobApp",
  annotations: [],
  fields: {
    packageId: {type: 'Edm.String'},
    minimumSupportedOperatingSystem: {type: 'graph.androidMinimumOperatingSystem'},
    versionName: {type: 'Edm.String'},
    versionCode: {type: 'Edm.String'}
  }
} as EntityConfig<AndroidLobApp>;