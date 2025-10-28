import { Duration } from 'angular-odata';

import { Location } from './location.complex';

export const EventLocationComplexType = 'Microsoft.OData.SampleService.Models.TripPin.EventLocation';
export interface EventLocation extends Location {
  BuildingInfo: string;
}
