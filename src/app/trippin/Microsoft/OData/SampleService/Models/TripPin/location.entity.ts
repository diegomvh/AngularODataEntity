import { City, CitySchema } from './city.entity';

export interface Location {
  Address: string;
  City: City
}

export const LocationSchema = {
  Address: {type: 'string'},
  City: {type: 'Microsoft.OData.SampleService.Models.TripPin.City'}
};