import { MetaEntity } from 'angular-odata';

import { AirportLocation } from './airportlocation.entity';

export const AirportLocationMetaEntity = {
  type: "Microsoft.OData.SampleService.Models.TripPin.AirportLocation",
  base: "Microsoft.OData.SampleService.Models.TripPin.Location",
  annotations: [],
  fields: {
    Loc: {type: 'Object', nullable: false, srid: 4326}
  }
} as MetaEntity<AirportLocation>;