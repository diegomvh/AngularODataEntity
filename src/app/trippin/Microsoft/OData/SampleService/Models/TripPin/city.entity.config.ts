import { EntityConfig } from 'angular-odata';

import { City } from './city.entity';

export const CityEntityConfig = {
  type: "Microsoft.OData.SampleService.Models.TripPin.City",
  annotations: [],
  fields: {
    CountryRegion: {type: 'string', nullable: false},
    Name: {type: 'string', nullable: false},
    Region: {type: 'string', nullable: false}
  }
} as EntityConfig<City>;