import { Location, LocationSchema } from './location.entity';

export interface EventLocation extends Location {
  BuildingInfo: string
}

export const EventLocationSchema = {
  base: 'Microsoft.OData.SampleService.Models.TripPin.Location',
  keys: [ 
    
  ],
  fields: [
    {name: 'BuildingInfo', type: 'string'}
  ]
};