import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { GeoCoordinates } from './geocoordinates.entity';
//#endregion

export const GeoCoordinatesConfig = {
  name: "GeoCoordinates",
  annotations: [],
  fields: {
    altitude: {type: 'Edm.Double'},
    latitude: {type: 'Edm.Double'},
    longitude: {type: 'Edm.Double'}
  }
} as EntityConfig<GeoCoordinates>;