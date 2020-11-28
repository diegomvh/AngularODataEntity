import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { RemoteItem } from './remoteitem.entity';
import { RemoteItemModel } from './remoteitem.model';
import { RemoteItemCollection } from './remoteitem.collection';
//#endregion

export const RemoteItemConfig = {
  name: "remoteItem",
  model: RemoteItemModel,
  collection: RemoteItemCollection,
  annotations: [],
  fields: {
    createdBy: {type: 'graph.identitySet'},
    createdDateTime: {type: 'Edm.DateTimeOffset'},
    file: {type: 'graph.file'},
    fileSystemInfo: {type: 'graph.fileSystemInfo'},
    folder: {type: 'graph.folder'},
    id: {type: 'Edm.String'},
    image: {type: 'graph.image'},
    lastModifiedBy: {type: 'graph.identitySet'},
    lastModifiedDateTime: {type: 'Edm.DateTimeOffset'},
    name: {type: 'Edm.String'},
    package: {type: 'graph.package'},
    parentReference: {type: 'graph.itemReference'},
    shared: {type: 'graph.shared'},
    sharepointIds: {type: 'graph.sharepointIds'},
    size: {type: 'Edm.Int64'},
    specialFolder: {type: 'graph.specialFolder'},
    video: {type: 'graph.video'},
    webDavUrl: {type: 'Edm.String'},
    webUrl: {type: 'Edm.String'}
  }
} as EntityConfig<RemoteItem>;