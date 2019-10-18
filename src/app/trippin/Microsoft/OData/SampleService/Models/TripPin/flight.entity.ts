import { Airline, AirlineSchema } from './airline.entity';
import { Airport, AirportSchema } from './airport.entity';
import { PublicTransportation, PublicTransportationSchema } from './publictransportation.entity';

export interface Flight extends PublicTransportation {
  FlightNumber: string;
  From?: Airport;
  To?: Airport;
  Airline?: Airline
}

export const FlightSchema = {
  base: 'Microsoft.OData.SampleService.Models.TripPin.PublicTransportation',
  keys: [ 
    
  ],
  fields: [
    {name: 'FlightNumber', type: 'string'},
    {name: 'From', type: 'Microsoft.OData.SampleService.Models.TripPin.Airport', isNullable: true, isNavigation: true},
    {name: 'To', type: 'Microsoft.OData.SampleService.Models.TripPin.Airport', isNullable: true, isNavigation: true},
    {name: 'Airline', type: 'Microsoft.OData.SampleService.Models.TripPin.Airline', isNullable: true, isNavigation: true}
  ]
};