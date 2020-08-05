import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Image } from './image.entity';
//#endregion

export const ImageConfig = {
  name: "Image",
  annotations: [],
  fields: {
    height: {type: 'Edm.Int32'},
    width: {type: 'Edm.Int32'}
  }
} as EntityConfig<Image>;