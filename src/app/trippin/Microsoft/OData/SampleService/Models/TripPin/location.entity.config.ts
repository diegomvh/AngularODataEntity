import { EntityConfig } from 'angular-odata';

import { Location } from './location.entity';

export const LocationEntityConfig = {
  type: "Microsoft.OData.SampleService.Models.TripPin.Location",
  annotations: [],
  fields: {
    Address: {type: 'string', nullable: false},
    City: {type: 'Microsoft.OData.SampleService.Models.TripPin.City', nullable: false}
  }
} as EntityConfig<Location>;