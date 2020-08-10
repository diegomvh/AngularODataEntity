import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Flight } from './flight.entity';
import { FlightModel } from './flight.model';
import { FlightCollection } from './flight.collection';
//#endregion

export const FlightConfig = {
  name: "Flight",
  base: "Microsoft.OData.SampleService.Models.TripPin.PublicTransportation",
  model: FlightModel,
  collection: FlightCollection,
  annotations: [],
  fields: {
    FlightNumber: {type: 'Edm.String', nullable: false},
    From: {type: 'Microsoft.OData.SampleService.Models.TripPin.Airport', navigation: true},
    To: {type: 'Microsoft.OData.SampleService.Models.TripPin.Airport', navigation: true},
    Airline: {type: 'Microsoft.OData.SampleService.Models.TripPin.Airline', navigation: true}
  }
} as EntityConfig<Flight>;