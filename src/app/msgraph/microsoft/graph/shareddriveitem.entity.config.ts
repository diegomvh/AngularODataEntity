import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { SharedDriveItem } from './shareddriveitem.entity';
import { SharedDriveItemModel } from './shareddriveitem.model';
import { SharedDriveItemCollection } from './shareddriveitem.collection';
//#endregion

export const SharedDriveItemConfig = {
  name: "sharedDriveItem",
  base: "microsoft.graph.baseItem",
  model: SharedDriveItemModel,
  collection: SharedDriveItemCollection,
  annotations: [],
  fields: {
    owner: {type: 'graph.identitySet'},
    driveItem: {type: 'graph.driveItem', navigation: true},
    items: {type: 'graph.driveItem', collection: true, navigation: true},
    list: {type: 'graph.list', navigation: true},
    listItem: {type: 'graph.listItem', navigation: true},
    permission: {type: 'graph.permission', navigation: true},
    root: {type: 'graph.driveItem', navigation: true},
    site: {type: 'graph.site', navigation: true}
  }
} as StructuredTypeConfig<SharedDriveItem>;