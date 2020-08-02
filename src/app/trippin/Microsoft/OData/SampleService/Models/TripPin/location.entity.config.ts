﻿import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Location } from './location.entity';
//#endregion

export const LocationConfig = {
  name: "Location",
  open: true,
  annotations: [],
  fields: {
    address: {name: 'Address', type: 'Edm.String', nullable: false},
    city: {name: 'City', type: 'Microsoft.OData.SampleService.Models.TripPin.City', nullable: false}
  }
} as EntityConfig<Location>;