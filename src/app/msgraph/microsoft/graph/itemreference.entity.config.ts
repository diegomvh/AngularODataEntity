import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ItemReference } from './itemreference.entity';
//#endregion

export const ItemReferenceConfig = {
  name: "itemReference",
  annotations: [],
  fields: {
    driveId: {type: 'Edm.String'},
    driveType: {type: 'Edm.String'},
    id: {type: 'Edm.String'},
    name: {type: 'Edm.String'},
    path: {type: 'Edm.String'},
    shareId: {type: 'Edm.String'},
    sharepointIds: {type: 'graph.sharepointIds'},
    siteId: {type: 'Edm.String'}
  }
} as EntityConfig<ItemReference>;