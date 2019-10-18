import { City, CitySchema } from './city.entity';

export interface Location {
  Address: string;
  City: City
}

export const LocationSchema = {
  
  keys: [ 
    
  ],
  fields: [
    {name: 'Address', type: 'string'},
    {name: 'City', type: 'Microsoft.OData.SampleService.Models.TripPin.City'}
  ]
};