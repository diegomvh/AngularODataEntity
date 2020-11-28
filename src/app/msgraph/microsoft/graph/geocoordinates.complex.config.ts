import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { GeoCoordinates } from './geocoordinates.complex';
import { GeoCoordinatesModel } from './geocoordinates.model';
import { GeoCoordinatesCollection } from './geocoordinates.collection';
//#endregion

export const GeoCoordinatesConfig = {
  name: "geoCoordinates",
  model: GeoCoordinatesModel,
  collection: GeoCoordinatesCollection,
  annotations: [],
  fields: {
    altitude: {type: 'Edm.Double'},
    latitude: {type: 'Edm.Double'},
    longitude: {type: 'Edm.Double'}
  }
} as StructuredTypeConfig<GeoCoordinates>;