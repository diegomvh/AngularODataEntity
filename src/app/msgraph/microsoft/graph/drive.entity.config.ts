import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { Drive } from './drive.entity';
import { DriveModel } from './drive.model';
import { DriveCollection } from './drive.collection';
//#endregion

export const DriveConfig = {
  name: "drive",
  base: "microsoft.graph.baseItem",
  model: DriveModel,
  collection: DriveCollection,
  annotations: [],
  fields: {
    driveType: {type: 'Edm.String'},
    owner: {type: 'graph.identitySet'},
    quota: {type: 'graph.quota'},
    sharePointIds: {type: 'graph.sharepointIds'},
    system: {type: 'graph.systemFacet'},
    following: {type: 'graph.driveItem', collection: true, navigation: true},
    items: {type: 'graph.driveItem', collection: true, navigation: true},
    list: {type: 'graph.list', navigation: true},
    root: {type: 'graph.driveItem', navigation: true},
    special: {type: 'graph.driveItem', collection: true, navigation: true}
  }
} as StructuredTypeConfig<Drive>;