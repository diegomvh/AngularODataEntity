import { AirportLocation, AirportLocationSchema } from './airportlocation.entity';

export interface Airport {
  IcaoCode: string;
  Name: string;
  IataCode: string;
  Location: AirportLocation
}

export const AirportSchema = {
  IcaoCode: {type: 'string', isKey: true, ref: 'IcaoCode'},
  Name: {type: 'string'},
  IataCode: {type: 'string'},
  Location: {type: 'Microsoft.OData.SampleService.Models.TripPin.AirportLocation'}
};