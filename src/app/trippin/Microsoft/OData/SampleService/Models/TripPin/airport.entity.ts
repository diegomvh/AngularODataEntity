import { AirportLocation, AirportLocationSchema } from './airportlocation.entity';

export interface Airport {
  IcaoCode: string;
  Name: string;
  IataCode: string;
  Location: AirportLocation
}

export const AirportSchema = {
  
  keys: [ 
    {name: 'IcaoCode'}
  ],
  fields: [
    {name: 'IcaoCode', type: 'string'},
    {name: 'Name', type: 'string'},
    {name: 'IataCode', type: 'string'},
    {name: 'Location', type: 'Microsoft.OData.SampleService.Models.TripPin.AirportLocation'}
  ]
};