import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ItemPreviewInfo } from './itempreviewinfo.entity';
//#endregion

export const ItemPreviewInfoConfig = {
  name: "ItemPreviewInfo",
  annotations: [],
  fields: {
    getUrl: {type: 'Edm.String'},
    postParameters: {type: 'Edm.String'},
    postUrl: {type: 'Edm.String'}
  }
} as EntityConfig<ItemPreviewInfo>;