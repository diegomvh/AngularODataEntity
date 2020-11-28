import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { HttpUrls } from './httpurls.entity';
import { HttpUrlsModel } from './httpurls.model';
import { HttpUrlsCollection } from './httpurls.collection';
//#endregion

export const HttpUrlsConfig = {
  name: "HttpUrls",
  base: "SIU.Api.Infrastructure.Storage.Backend.SourceUrls",
  model: HttpUrlsModel,
  collection: HttpUrlsCollection,
  annotations: [],
  fields: {
    embedded: {type: 'Edm.String'},
    share: {type: 'Edm.String'},
    pdf: {type: 'Edm.String'},
    html: {type: 'Edm.String'}
  }
} as EntityConfig<HttpUrls>;