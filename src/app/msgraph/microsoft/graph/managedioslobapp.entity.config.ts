import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ManagedIOSLobApp } from './managedioslobapp.entity';
import { ManagedIOSLobAppModel } from './managedioslobapp.model';
import { ManagedIOSLobAppCollection } from './managedioslobapp.collection';
//#endregion

export const ManagedIOSLobAppConfig = {
  name: "managedIOSLobApp",
  base: "microsoft.graph.managedMobileLobApp",
  model: ManagedIOSLobAppModel,
  collection: ManagedIOSLobAppCollection,
  annotations: [],
  fields: {
    applicableDeviceType: {type: 'graph.iosDeviceType', nullable: false},
    buildNumber: {type: 'Edm.String'},
    bundleId: {type: 'Edm.String'},
    expirationDateTime: {type: 'Edm.DateTimeOffset'},
    minimumSupportedOperatingSystem: {type: 'graph.iosMinimumOperatingSystem'},
    versionNumber: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<ManagedIOSLobApp>;