import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { IosLobApp } from './ioslobapp.entity';
import { IosLobAppModel } from './ioslobapp.model';
import { IosLobAppCollection } from './ioslobapp.collection';
//#endregion

export const IosLobAppConfig = {
  name: "iosLobApp",
  base: "microsoft.graph.mobileLobApp",
  model: IosLobAppModel,
  collection: IosLobAppCollection,
  annotations: [],
  fields: {
    applicableDeviceType: {type: 'graph.iosDeviceType', nullable: false},
    buildNumber: {type: 'Edm.String'},
    bundleId: {type: 'Edm.String'},
    expirationDateTime: {type: 'Edm.DateTimeOffset'},
    minimumSupportedOperatingSystem: {type: 'graph.iosMinimumOperatingSystem'},
    versionNumber: {type: 'Edm.String'}
  }
} as EntityConfig<IosLobApp>;