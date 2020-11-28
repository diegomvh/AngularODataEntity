import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { SharepointIds } from './sharepointids.entity';
import { SharepointIdsModel } from './sharepointids.model';
import { SharepointIdsCollection } from './sharepointids.collection';
//#endregion

export const SharepointIdsConfig = {
  name: "sharepointIds",
  model: SharepointIdsModel,
  collection: SharepointIdsCollection,
  annotations: [],
  fields: {
    listId: {type: 'Edm.String'},
    listItemId: {type: 'Edm.String'},
    listItemUniqueId: {type: 'Edm.String'},
    siteId: {type: 'Edm.String'},
    siteUrl: {type: 'Edm.String'},
    tenantId: {type: 'Edm.String'},
    webId: {type: 'Edm.String'}
  }
} as EntityConfig<SharepointIds>;