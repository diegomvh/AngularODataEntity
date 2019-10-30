import { EventLocation, EventLocationSchema } from './eventlocation.entity';
import { PlanItem, PlanItemSchema } from './planitem.entity';

export interface Event extends PlanItem {
  Description: string;
  OccursAt: EventLocation
}

export const EventSchema = Object.assign({}, PlanItemSchema, {
  Description: {type: 'string'},
  OccursAt: {type: 'Microsoft.OData.SampleService.Models.TripPin.EventLocation'}
});