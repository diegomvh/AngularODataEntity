

import { PublicTransportation } from './public-transportation.entity';
import { Airport } from './airport.entity';
import { Airline } from './airline.entity';

// #region Custom
// #endregion Custom
export const FlightEntityType = 'Microsoft.OData.SampleService.Models.TripPin.Flight';
export interface Flight extends PublicTransportation {
  FlightNumber: string;
  From?: Airport;
  To?: Airport;
  Airline?: Airline;
// #region Custom
// #endregion Custom
}
