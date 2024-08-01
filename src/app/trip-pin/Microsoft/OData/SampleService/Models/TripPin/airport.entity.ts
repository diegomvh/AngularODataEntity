import { Duration } from 'angular-odata';
import { AirportLocation } from './airport-location.complex';

export const AirportType = 'Microsoft.OData.SampleService.Models.TripPin.Airport';
export interface Airport {
  IcaoCode: string;
  Name: string;
  IataCode: string;
  Location: AirportLocation;
}
