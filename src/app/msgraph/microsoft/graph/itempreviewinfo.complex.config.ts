import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ItemPreviewInfo } from './itempreviewinfo.complex';
import { ItemPreviewInfoModel } from './itempreviewinfo.model';
import { ItemPreviewInfoCollection } from './itempreviewinfo.collection';
//#endregion

export const ItemPreviewInfoConfig = {
  name: "itemPreviewInfo",
  model: ItemPreviewInfoModel,
  collection: ItemPreviewInfoCollection,
  annotations: [],
  fields: {
    getUrl: {type: 'Edm.String'},
    postParameters: {type: 'Edm.String'},
    postUrl: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<ItemPreviewInfo>;