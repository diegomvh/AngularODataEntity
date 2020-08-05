import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { MobileLobApp } from './mobilelobapp.entity';
//#endregion

export const MobileLobAppConfig = {
  name: "mobileLobApp",
  base: "microsoft.graph.mobileApp",
  annotations: [],
  fields: {
    committedContentVersion: {type: 'Edm.String'},
    fileName: {type: 'Edm.String'},
    size: {type: 'Edm.Int64', nullable: false},
    contentVersions: {type: 'graph.mobileAppContent', collection: true, navigation: true}
  }
} as EntityConfig<MobileLobApp>;