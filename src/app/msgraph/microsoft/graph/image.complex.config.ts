import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { Image } from './image.complex';
import { ImageModel } from './image.model';
import { ImageCollection } from './image.collection';
//#endregion

export const ImageConfig = {
  name: "image",
  model: ImageModel,
  collection: ImageCollection,
  annotations: [],
  fields: {
    height: {type: 'Edm.Int32'},
    width: {type: 'Edm.Int32'}
  }
} as StructuredTypeConfig<Image>;