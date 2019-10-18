import { EventLocation, EventLocationSchema } from './eventlocation.entity';
import { PlanItem, PlanItemSchema } from './planitem.entity';

export interface Event extends PlanItem {
  Description: string;
  OccursAt: EventLocation
}

export const EventSchema = {
  base: 'Microsoft.OData.SampleService.Models.TripPin.PlanItem',
  keys: [ 
    
  ],
  fields: [
    {name: 'Description', type: 'string'},
    {name: 'OccursAt', type: 'Microsoft.OData.SampleService.Models.TripPin.EventLocation'}
  ]
};