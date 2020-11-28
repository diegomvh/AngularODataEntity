import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { SkuaUrls } from './skuaurls.entity';
import { SkuaUrlsModel } from './skuaurls.model';
import { SkuaUrlsCollection } from './skuaurls.collection';
//#endregion

export const SkuaUrlsConfig = {
  name: "SkuaUrls",
  base: "SIU.Api.Infrastructure.Storage.Backend.SourceUrls",
  model: SkuaUrlsModel,
  collection: SkuaUrlsCollection,
  annotations: [],
  fields: {
    embedded: {type: 'Edm.String'},
    share: {type: 'Edm.String'},
    proxyPdf: {type: 'Edm.String'},
    proxyHtml: {type: 'Edm.String'},
    pdf: {type: 'Edm.String'},
    html: {type: 'Edm.String'}
  }
} as EntityConfig<SkuaUrls>;