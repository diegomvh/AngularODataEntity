import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Location } from './location.entity';
import { LocationModel } from './location.model';
import { LocationCollection } from './location.collection';
//#endregion

export const LocationConfig = {
  name: "location",
  model: LocationModel,
  collection: LocationCollection,
  annotations: [],
  fields: {
    address: {type: 'graph.physicalAddress'},
    coordinates: {type: 'graph.outlookGeoCoordinates'},
    displayName: {type: 'Edm.String'},
    locationEmailAddress: {type: 'Edm.String'},
    locationType: {type: 'graph.locationType'},
    locationUri: {type: 'Edm.String'},
    uniqueId: {type: 'Edm.String'},
    uniqueIdType: {type: 'graph.locationUniqueIdType'}
  }
} as EntityConfig<Location>;