import { Duration } from 'angular-odata';
import { Location } from './location.complex';

export const EventLocationType = 'Microsoft.OData.SampleService.Models.TripPin.EventLocation';
export interface EventLocation extends Location {
  BuildingInfo: string;
}
