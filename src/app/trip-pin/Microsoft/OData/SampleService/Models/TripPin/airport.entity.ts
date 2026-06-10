

import { AirportLocation } from './airport-location.complex';

// #region Custom
// #endregion Custom
export const AirportEntityType = 'Microsoft.OData.SampleService.Models.TripPin.Airport';
export interface Airport {
  IcaoCode: string;
  Name: string;
  IataCode: string;
  Location: AirportLocation;
// #region Custom
// #endregion Custom
}
