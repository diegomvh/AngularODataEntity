import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ManagedMobileLobApp } from './managedmobilelobapp.entity';
//#endregion

export const ManagedMobileLobAppConfig = {
  name: "managedMobileLobApp",
  base: "microsoft.graph.managedApp",
  annotations: [],
  fields: {
    committedContentVersion: {type: 'Edm.String'},
    fileName: {type: 'Edm.String'},
    size: {type: 'Edm.Int64', nullable: false},
    contentVersions: {type: 'graph.mobileAppContent', collection: true, navigation: true}
  }
} as EntityConfig<ManagedMobileLobApp>;