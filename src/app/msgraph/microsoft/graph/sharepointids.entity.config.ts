import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { SharepointIds } from './sharepointids.entity';
//#endregion

export const SharepointIdsConfig = {
  name: "SharepointIds",
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