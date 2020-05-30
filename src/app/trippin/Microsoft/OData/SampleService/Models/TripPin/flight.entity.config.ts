import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Flight } from './flight.entity';
//#endregion

export const FlightConfig = {
  name: "Flight",
  base: "Microsoft.OData.SampleService.Models.TripPin.PublicTransportation",
  annotations: [],
  fields: {
    FlightNumber: {type: 'string', nullable: false},
    From: {type: 'Microsoft.OData.SampleService.Models.TripPin.Airport', navigation: true},
    To: {type: 'Microsoft.OData.SampleService.Models.TripPin.Airport', navigation: true},
    Airline: {type: 'Microsoft.OData.SampleService.Models.TripPin.Airline', navigation: true}
  }
} as EntityConfig<Flight>;