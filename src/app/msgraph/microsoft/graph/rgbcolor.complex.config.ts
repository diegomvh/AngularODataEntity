import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { RgbColor } from './rgbcolor.complex';
import { RgbColorModel } from './rgbcolor.model';
import { RgbColorCollection } from './rgbcolor.collection';
//#endregion

export const RgbColorConfig = {
  name: "rgbColor",
  model: RgbColorModel,
  collection: RgbColorCollection,
  annotations: [],
  fields: {
    b: {type: 'Edm.Byte', nullable: false},
    g: {type: 'Edm.Byte', nullable: false},
    r: {type: 'Edm.Byte', nullable: false}
  }
} as StructuredTypeConfig<RgbColor>;