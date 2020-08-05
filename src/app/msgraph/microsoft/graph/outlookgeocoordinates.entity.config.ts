import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { OutlookGeoCoordinates } from './outlookgeocoordinates.entity';
//#endregion

export const OutlookGeoCoordinatesConfig = {
  name: "OutlookGeoCoordinates",
  annotations: [],
  fields: {
    latitude: {type: 'Edm.Double'},
    longitude: {type: 'Edm.Double'},
    accuracy: {type: 'Edm.Double'},
    altitude: {type: 'Edm.Double'},
    altitudeAccuracy: {type: 'Edm.Double'}
  }
} as EntityConfig<OutlookGeoCoordinates>;