import { MetaEntity } from 'angular-odata';

import { Event } from './event.entity';

export const EventMetaEntity = {
  type: "Microsoft.OData.SampleService.Models.TripPin.Event",
  base: "Microsoft.OData.SampleService.Models.TripPin.PlanItem",
  annotations: [],
  fields: {
    Description: {type: 'string'},
    OccursAt: {type: 'Microsoft.OData.SampleService.Models.TripPin.EventLocation', nullable: false}
  }
} as MetaEntity<Event>;