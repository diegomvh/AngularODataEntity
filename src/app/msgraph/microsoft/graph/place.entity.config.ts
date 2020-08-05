import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Place } from './place.entity';
//#endregion

export const PlaceConfig = {
  name: "Place",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    displayName: {type: 'Edm.String', nullable: false},
    geoCoordinates: {type: 'graph.outlookGeoCoordinates'},
    phone: {type: 'Edm.String'},
    address: {type: 'graph.physicalAddress'}
  }
} as EntityConfig<Place>;