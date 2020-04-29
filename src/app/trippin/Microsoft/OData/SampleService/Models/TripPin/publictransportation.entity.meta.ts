import { MetaEntity } from 'angular-odata';

import { PublicTransportation } from './publictransportation.entity';

export const PublicTransportationMetaEntity = {
  type: "Microsoft.OData.SampleService.Models.TripPin.PublicTransportation",
  base: "Microsoft.OData.SampleService.Models.TripPin.PlanItem",
  annotations: [],
  fields: {
    SeatNumber: {type: 'string'}
  }
} as MetaEntity<PublicTransportation>;