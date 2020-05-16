import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Event } from './event.entity';
//#endregion

export const EventEntityConfig = {
  type: "Microsoft.OData.SampleService.Models.TripPin.Event",
  base: "Microsoft.OData.SampleService.Models.TripPin.PlanItem",
  annotations: [],
  fields: {
    Description: {type: 'string'},
    OccursAt: {type: 'Microsoft.OData.SampleService.Models.TripPin.EventLocation', nullable: false}
  }
} as EntityConfig<Event>;