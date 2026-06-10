
import { Point, } from 'geojson';
import { Location } from './location.complex';

// #region Custom
// #endregion Custom
export const AirportLocationComplexType = 'Microsoft.OData.SampleService.Models.TripPin.AirportLocation';
export interface AirportLocation extends Location {
  Loc: Point;
// #region Custom
// #endregion Custom
}
