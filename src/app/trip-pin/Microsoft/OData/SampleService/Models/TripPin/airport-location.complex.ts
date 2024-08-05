import { Duration } from 'angular-odata';
import { Location } from './location.complex';

export const AirportLocationType = 'Microsoft.OData.SampleService.Models.TripPin.AirportLocation';
export interface AirportLocation extends Location {
  Loc: Point;
}
