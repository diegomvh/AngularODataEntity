import { Airline, AirlineSchema } from './airline.interface';
import { Airport, AirportSchema } from './airport.interface';
import { PublicTransportation, PublicTransportationSchema } from './publictransportation.interface';

export interface Flight extends PublicTransportation {
  FlightNumber: string;
  From?: Airport;
  To?: Airport;
  Airline?: Airline
}

export const FlightSchema = Object.assign({}, PublicTransportationSchema, {
  FlightNumber: {type: 'string', nullable: false},
  From: {type: 'Microsoft.OData.SampleService.Models.TripPin.Airport', navigation: true},
  To: {type: 'Microsoft.OData.SampleService.Models.TripPin.Airport', navigation: true},
  Airline: {type: 'Microsoft.OData.SampleService.Models.TripPin.Airline', navigation: true}
});