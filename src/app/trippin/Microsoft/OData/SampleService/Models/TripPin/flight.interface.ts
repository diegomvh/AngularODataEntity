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
  FlightNumber: {type: 'string'},
  From: {type: 'Microsoft.OData.SampleService.Models.TripPin.Airport', isNullable: true, isNavigation: true},
  To: {type: 'Microsoft.OData.SampleService.Models.TripPin.Airport', isNullable: true, isNavigation: true},
  Airline: {type: 'Microsoft.OData.SampleService.Models.TripPin.Airline', isNullable: true, isNavigation: true}
});