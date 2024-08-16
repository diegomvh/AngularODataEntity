import { Duration } from 'angular-odata';
import { PublicTransportation } from './public-transportation.entity';
import { Airport } from './airport.entity';
import { Airline } from './airline.entity';

export const FlightEntityType = 'Microsoft.OData.SampleService.Models.TripPin.Flight';
export interface Flight extends PublicTransportation {
  FlightNumber: string;
  From?: Airport;
  To?: Airport;
  Airline?: Airline;
}
