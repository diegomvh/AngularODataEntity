import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { SourceUrls } from './sourceurls.entity';
import { SourceUrlsModel } from './sourceurls.model';
import { SourceUrlsCollection } from './sourceurls.collection';
//#endregion

export const SourceUrlsConfig = {
  name: "SourceUrls",
  model: SourceUrlsModel,
  collection: SourceUrlsCollection,
  annotations: [],
  fields: {
    base: {type: 'Edm.String'},
    anonymous: {type: 'Edm.String'},
    open: {type: 'Edm.String'},
    download: {type: 'Edm.String'}
  }
} as EntityConfig<SourceUrls>;