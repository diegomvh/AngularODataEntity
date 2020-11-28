import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ImageInfo } from './imageinfo.entity';
import { ImageInfoModel } from './imageinfo.model';
import { ImageInfoCollection } from './imageinfo.collection';
//#endregion

export const ImageInfoConfig = {
  name: "imageInfo",
  model: ImageInfoModel,
  collection: ImageInfoCollection,
  annotations: [],
  fields: {
    addImageQuery: {type: 'Edm.Boolean'},
    alternateText: {type: 'Edm.String'},
    alternativeText: {type: 'Edm.String'},
    iconUrl: {type: 'Edm.String'}
  }
} as EntityConfig<ImageInfo>;