import { Duration } from 'angular-odata';
import { PlanItem } from './plan-item.entity';
import { EventLocation } from './event-location.complex';

export const EventType = 'Microsoft.OData.SampleService.Models.TripPin.Event';
export interface Event extends PlanItem {
  Description: string;
  OccursAt: EventLocation;
}
