import { PublicTransportationMeta } from './publictransportation.meta';
import { AirlineMeta } from './airline.meta';
import { AirportMeta } from './airport.meta';

export const FlightMeta = {
  type: "Microsoft.OData.SampleService.Models.TripPin.Flight",
  base: "Microsoft.OData.SampleService.Models.TripPin.PublicTransportation",
  fields: {
    FlightNumber: {type: 'string', nullable: false},
    From: {type: 'Microsoft.OData.SampleService.Models.TripPin.Airport', navigation: true},
    To: {type: 'Microsoft.OData.SampleService.Models.TripPin.Airport', navigation: true},
    Airline: {type: 'Microsoft.OData.SampleService.Models.TripPin.Airline', navigation: true}
  }
};