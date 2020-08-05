import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { AndroidStoreApp } from './androidstoreapp.entity';
//#endregion

export const AndroidStoreAppConfig = {
  name: "androidStoreApp",
  base: "microsoft.graph.mobileApp",
  annotations: [],
  fields: {
    packageId: {type: 'Edm.String'},
    appStoreUrl: {type: 'Edm.String'},
    minimumSupportedOperatingSystem: {type: 'graph.androidMinimumOperatingSystem'}
  }
} as EntityConfig<AndroidStoreApp>;