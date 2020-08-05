import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { IosLobApp } from './ioslobapp.entity';
//#endregion

export const IosLobAppConfig = {
  name: "IosLobApp",
  base: "microsoft.graph.mobileLobApp",
  annotations: [],
  fields: {
    bundleId: {type: 'Edm.String'},
    applicableDeviceType: {type: 'graph.iosDeviceType', nullable: false},
    minimumSupportedOperatingSystem: {type: 'graph.iosMinimumOperatingSystem'},
    expirationDateTime: {type: 'Edm.DateTimeOffset'},
    versionNumber: {type: 'Edm.String'},
    buildNumber: {type: 'Edm.String'}
  }
} as EntityConfig<IosLobApp>;