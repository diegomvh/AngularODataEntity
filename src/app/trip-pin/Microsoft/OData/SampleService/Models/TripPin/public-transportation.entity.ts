import { Duration } from 'angular-odata';
import { PlanItem } from './plan-item.entity';

export const PublicTransportationEntityType = 'Microsoft.OData.SampleService.Models.TripPin.PublicTransportation';
export interface PublicTransportation extends PlanItem {
  SeatNumber: string;
}
