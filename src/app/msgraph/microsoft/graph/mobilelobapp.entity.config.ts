import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { MobileLobApp } from './mobilelobapp.entity';
import { MobileLobAppModel } from './mobilelobapp.model';
import { MobileLobAppCollection } from './mobilelobapp.collection';
//#endregion

export const MobileLobAppConfig = {
  name: "mobileLobApp",
  base: "microsoft.graph.mobileApp",
  model: MobileLobAppModel,
  collection: MobileLobAppCollection,
  annotations: [],
  fields: {
    committedContentVersion: {type: 'Edm.String'},
    fileName: {type: 'Edm.String'},
    size: {type: 'Edm.Int64', nullable: false},
    contentVersions: {type: 'graph.mobileAppContent', collection: true, navigation: true}
  }
} as StructuredTypeConfig<MobileLobApp>;