import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Event } from './event.entity';
//#endregion

export const EventConfig = {
  name: "Event",
  base: "Microsoft.OData.SampleService.Models.TripPin.PlanItem",
  open: true,
  annotations: [],
  fields: {
    description: {name: 'Description', type: 'Edm.String'},
    occursAt: {name: 'OccursAt', type: 'Microsoft.OData.SampleService.Models.TripPin.EventLocation', nullable: false}
  }
} as EntityConfig<Event>;