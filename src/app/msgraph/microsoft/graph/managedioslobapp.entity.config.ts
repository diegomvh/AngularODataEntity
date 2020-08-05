import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ManagedIOSLobApp } from './managedioslobapp.entity';
//#endregion

export const ManagedIOSLobAppConfig = {
  name: "ManagedIOSLobApp",
  base: "microsoft.graph.managedMobileLobApp",
  annotations: [],
  fields: {
    bundleId: {type: 'Edm.String'},
    applicableDeviceType: {type: 'graph.iosDeviceType', nullable: false},
    minimumSupportedOperatingSystem: {type: 'graph.iosMinimumOperatingSystem'},
    expirationDateTime: {type: 'Edm.DateTimeOffset'},
    versionNumber: {type: 'Edm.String'},
    buildNumber: {type: 'Edm.String'}
  }
} as EntityConfig<ManagedIOSLobApp>;