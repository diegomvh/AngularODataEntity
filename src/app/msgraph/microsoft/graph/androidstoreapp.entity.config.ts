import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { AndroidStoreApp } from './androidstoreapp.entity';
import { AndroidStoreAppModel } from './androidstoreapp.model';
import { AndroidStoreAppCollection } from './androidstoreapp.collection';
//#endregion

export const AndroidStoreAppConfig = {
  name: "androidStoreApp",
  base: "microsoft.graph.mobileApp",
  model: AndroidStoreAppModel,
  collection: AndroidStoreAppCollection,
  annotations: [],
  fields: {
    appStoreUrl: {type: 'Edm.String'},
    minimumSupportedOperatingSystem: {type: 'graph.androidMinimumOperatingSystem'},
    packageId: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<AndroidStoreApp>;