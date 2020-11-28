import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { OutlookGeoCoordinates } from './outlookgeocoordinates.complex';
import { OutlookGeoCoordinatesModel } from './outlookgeocoordinates.model';
import { OutlookGeoCoordinatesCollection } from './outlookgeocoordinates.collection';
//#endregion

export const OutlookGeoCoordinatesConfig = {
  name: "outlookGeoCoordinates",
  model: OutlookGeoCoordinatesModel,
  collection: OutlookGeoCoordinatesCollection,
  annotations: [],
  fields: {
    accuracy: {type: 'Edm.Double'},
    altitude: {type: 'Edm.Double'},
    altitudeAccuracy: {type: 'Edm.Double'},
    latitude: {type: 'Edm.Double'},
    longitude: {type: 'Edm.Double'}
  }
} as StructuredTypeConfig<OutlookGeoCoordinates>;