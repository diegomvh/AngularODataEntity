import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Photo } from './photo.entity';
//#endregion

export const PhotoConfig = {
  name: "photo",
  annotations: [],
  fields: {
    cameraMake: {type: 'Edm.String'},
    cameraModel: {type: 'Edm.String'},
    exposureDenominator: {type: 'Edm.Double'},
    exposureNumerator: {type: 'Edm.Double'},
    fNumber: {type: 'Edm.Double'},
    focalLength: {type: 'Edm.Double'},
    iso: {type: 'Edm.Int32'},
    orientation: {type: 'Edm.Int16'},
    takenDateTime: {type: 'Edm.DateTimeOffset'}
  }
} as EntityConfig<Photo>;