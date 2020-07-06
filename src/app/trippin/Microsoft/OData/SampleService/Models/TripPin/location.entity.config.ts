import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Location } from './location.entity';
//#endregion

export const LocationConfig = {
  name: "Location",
  annotations: [],
  fields: {
    Address: {type: 'Edm.String', nullable: false},
    City: {type: 'Microsoft.OData.SampleService.Models.TripPin.City', nullable: false}
  }
} as EntityConfig<Location>;