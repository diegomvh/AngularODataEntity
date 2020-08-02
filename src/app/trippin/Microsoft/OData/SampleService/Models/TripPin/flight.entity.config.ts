import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Flight } from './flight.entity';
//#endregion

export const FlightConfig = {
  name: "Flight",
  base: "Microsoft.OData.SampleService.Models.TripPin.PublicTransportation",
  annotations: [],
  fields: {
    flightNumber: {name: 'FlightNumber', type: 'Edm.String', nullable: false},
    from: {name: 'From', type: 'Microsoft.OData.SampleService.Models.TripPin.Airport', navigation: true},
    to: {name: 'To', type: 'Microsoft.OData.SampleService.Models.TripPin.Airport', navigation: true},
    airline: {name: 'Airline', type: 'Microsoft.OData.SampleService.Models.TripPin.Airline', navigation: true}
  }
} as EntityConfig<Flight>;