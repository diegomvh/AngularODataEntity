import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { AndroidLobApp } from './androidlobapp.entity';
import { AndroidLobAppModel } from './androidlobapp.model';
import { AndroidLobAppCollection } from './androidlobapp.collection';
//#endregion

export const AndroidLobAppConfig = {
  name: "androidLobApp",
  base: "microsoft.graph.mobileLobApp",
  model: AndroidLobAppModel,
  collection: AndroidLobAppCollection,
  annotations: [],
  fields: {
    minimumSupportedOperatingSystem: {type: 'graph.androidMinimumOperatingSystem'},
    packageId: {type: 'Edm.String'},
    versionCode: {type: 'Edm.String'},
    versionName: {type: 'Edm.String'}
  }
} as EntityConfig<AndroidLobApp>;