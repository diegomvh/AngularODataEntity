import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Location } from './location.entity';
//#endregion

export const LocationEntityConfig = {
  name: "Location",
  annotations: [],
  fields: {
    Address: {type: 'string', nullable: false},
    City: {type: 'Microsoft.OData.SampleService.Models.TripPin.City', nullable: false}
  }
} as EntityConfig<Location>;