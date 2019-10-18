import { Location, LocationSchema } from './location.entity';

export interface AirportLocation extends Location {
  Loc: any
}

export const AirportLocationSchema = {
  base: 'Microsoft.OData.SampleService.Models.TripPin.Location',
  keys: [ 
    
  ],
  fields: [
    {name: 'Loc', type: 'Object'}
  ]
};