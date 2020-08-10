import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Location } from './location.entity';
import { LocationModel } from './location.model';
import { LocationCollection } from './location.collection';
//#endregion

export const LocationConfig = {
  name: "Location",
  open: true,
  model: LocationModel,
  collection: LocationCollection,
  annotations: [],
  fields: {
    Address: {type: 'Edm.String', nullable: false},
    City: {type: 'Microsoft.OData.SampleService.Models.TripPin.City', nullable: false}
  }
} as EntityConfig<Location>;