import { Duration } from 'angular-odata';
import { Point, } from 'geojson';
import { Location } from './location.complex';

export const AirportLocationComplexType = 'Microsoft.OData.SampleService.Models.TripPin.AirportLocation';
export interface AirportLocation extends Location {
  Loc: Point;
}
