import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Place } from './place.entity';
import { PlaceModel } from './place.model';
import { PlaceCollection } from './place.collection';
//#endregion

export const PlaceConfig = {
  name: "place",
  base: "microsoft.graph.entity",
  model: PlaceModel,
  collection: PlaceCollection,
  annotations: [],
  fields: {
    address: {type: 'graph.physicalAddress'},
    displayName: {type: 'Edm.String', nullable: false},
    geoCoordinates: {type: 'graph.outlookGeoCoordinates'},
    phone: {type: 'Edm.String'}
  }
} as EntityConfig<Place>;