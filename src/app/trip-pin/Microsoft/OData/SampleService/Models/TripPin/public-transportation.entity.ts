

import { PlanItem } from './plan-item.entity';

// #region Custom
// #endregion Custom
export const PublicTransportationEntityType = 'Microsoft.OData.SampleService.Models.TripPin.PublicTransportation';
export interface PublicTransportation extends PlanItem {
  SeatNumber: string;
// #region Custom
// #endregion Custom
}
