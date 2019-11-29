import { AirportLocation, AirportLocationSchema } from './airportlocation.interface';

export interface Airport {
  IcaoCode: string;
  Name: string;
  IataCode: string;
  Location: AirportLocation
}

export const AirportSchema = {
  IcaoCode: {type: 'string', key: true, ref: 'IcaoCode', nullable: false},
  Name: {type: 'string', nullable: false},
  IataCode: {type: 'string', nullable: false},
  Location: {type: 'Microsoft.OData.SampleService.Models.TripPin.AirportLocation', nullable: false}
};