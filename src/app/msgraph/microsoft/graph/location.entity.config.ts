import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Location } from './location.entity';
//#endregion

export const LocationConfig = {
  name: "Location",
  annotations: [],
  fields: {
    displayName: {type: 'Edm.String'},
    locationEmailAddress: {type: 'Edm.String'},
    address: {type: 'graph.physicalAddress'},
    locationUri: {type: 'Edm.String'},
    coordinates: {type: 'graph.outlookGeoCoordinates'},
    locationType: {type: 'graph.locationType'},
    uniqueId: {type: 'Edm.String'},
    uniqueIdType: {type: 'graph.locationUniqueIdType'}
  }
} as EntityConfig<Location>;