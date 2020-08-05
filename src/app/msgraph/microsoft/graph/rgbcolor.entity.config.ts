import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { RgbColor } from './rgbcolor.entity';
//#endregion

export const RgbColorConfig = {
  name: "RgbColor",
  annotations: [],
  fields: {
    r: {type: 'Edm.Byte', nullable: false},
    g: {type: 'Edm.Byte', nullable: false},
    b: {type: 'Edm.Byte', nullable: false}
  }
} as EntityConfig<RgbColor>;