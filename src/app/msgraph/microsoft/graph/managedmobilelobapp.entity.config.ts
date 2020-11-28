import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ManagedMobileLobApp } from './managedmobilelobapp.entity';
import { ManagedMobileLobAppModel } from './managedmobilelobapp.model';
import { ManagedMobileLobAppCollection } from './managedmobilelobapp.collection';
//#endregion

export const ManagedMobileLobAppConfig = {
  name: "managedMobileLobApp",
  base: "microsoft.graph.managedApp",
  model: ManagedMobileLobAppModel,
  collection: ManagedMobileLobAppCollection,
  annotations: [],
  fields: {
    committedContentVersion: {type: 'Edm.String'},
    fileName: {type: 'Edm.String'},
    size: {type: 'Edm.Int64', nullable: false},
    contentVersions: {type: 'graph.mobileAppContent', collection: true, navigation: true}
  }
} as EntityConfig<ManagedMobileLobApp>;