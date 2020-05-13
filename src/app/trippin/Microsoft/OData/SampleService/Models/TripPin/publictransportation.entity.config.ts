import { EntityConfig } from 'angular-odata';

import { PublicTransportation } from './publictransportation.entity';

export const PublicTransportationEntityConfig = {
  type: "Microsoft.OData.SampleService.Models.TripPin.PublicTransportation",
  base: "Microsoft.OData.SampleService.Models.TripPin.PlanItem",
  annotations: [],
  fields: {
    SeatNumber: {type: 'string'}
  }
} as EntityConfig<PublicTransportation>;