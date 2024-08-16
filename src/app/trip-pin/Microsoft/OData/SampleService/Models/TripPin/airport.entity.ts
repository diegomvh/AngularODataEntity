import { Duration } from 'angular-odata';
import { AirportLocation } from './airport-location.complex';

export const AirportEntityType = 'Microsoft.OData.SampleService.Models.TripPin.Airport';
export interface Airport {
  IcaoCode: string;
  Name: string;
  IataCode: string;
  Location: AirportLocation;
}
