

import { PlanItem } from './plan-item.entity';
import { EventLocation } from './event-location.complex';

// #region Custom
// #endregion Custom
export const EventEntityType = 'Microsoft.OData.SampleService.Models.TripPin.Event';
export interface Event extends PlanItem {
  Description: string;
  OccursAt: EventLocation;
// #region Custom
// #endregion Custom
}
