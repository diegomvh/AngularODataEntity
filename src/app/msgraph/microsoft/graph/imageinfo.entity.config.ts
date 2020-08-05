import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ImageInfo } from './imageinfo.entity';
//#endregion

export const ImageInfoConfig = {
  name: "imageInfo",
  annotations: [],
  fields: {
    iconUrl: {type: 'Edm.String'},
    alternativeText: {type: 'Edm.String'},
    alternateText: {type: 'Edm.String'},
    addImageQuery: {type: 'Edm.Boolean'}
  }
} as EntityConfig<ImageInfo>;