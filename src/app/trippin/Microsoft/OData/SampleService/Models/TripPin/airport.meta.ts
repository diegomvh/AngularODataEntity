import { AirportsService } from './airports.service';
import { AirportLocationMeta } from './airportlocation.meta';

export const AirportMeta = {
  type: "Microsoft.OData.SampleService.Models.TripPin.Airport",
  set: "Airports",
  fields: {
    IcaoCode: {type: 'string', key: true, ref: 'IcaoCode', nullable: false},
    Name: {type: 'string', nullable: false},
    IataCode: {type: 'string', nullable: false},
    Location: {type: 'Microsoft.OData.SampleService.Models.TripPin.AirportLocation', nullable: false}
  }
};