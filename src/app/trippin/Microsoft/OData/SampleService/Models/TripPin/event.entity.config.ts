import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Event } from './event.entity';
import { EventModel } from './event.model';
import { EventCollection } from './event.collection';
//#endregion

export const EventConfig = {
  name: "Event",
  base: "Microsoft.OData.SampleService.Models.TripPin.PlanItem",
  open: true,
  model: EventModel,
  collection: EventCollection,
  annotations: [],
  fields: {
    Description: {type: 'Edm.String'},
    OccursAt: {type: 'Microsoft.OData.SampleService.Models.TripPin.EventLocation', nullable: false}
  }
} as EntityConfig<Event>;