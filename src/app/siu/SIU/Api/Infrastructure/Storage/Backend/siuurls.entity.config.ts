import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { SiuUrls } from './siuurls.entity';
import { SiuUrlsModel } from './siuurls.model';
import { SiuUrlsCollection } from './siuurls.collection';
//#endregion

export const SiuUrlsConfig = {
  name: "SiuUrls",
  base: "SIU.Api.Infrastructure.Storage.Backend.SourceUrls",
  model: SiuUrlsModel,
  collection: SiuUrlsCollection,
  annotations: [],
  fields: {
    embedded: {type: 'Edm.String'},
    share: {type: 'Edm.String'},
    pdf: {type: 'Edm.String'},
    html: {type: 'Edm.String'}
  }
} as EntityConfig<SiuUrls>;