import { Duration } from 'angular-odata';
import { Location } from './location.complex';
import { Point } from 'geojson';

export const AirportLocationComplexType = 'Microsoft.OData.SampleService.Models.TripPin.AirportLocation';
export interface AirportLocation extends Location {
  Loc: Point;
}
