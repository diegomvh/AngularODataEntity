import { City, CitySchema } from './city.interface';

export interface Location {
  Address: string;
  City: City
}

export const LocationSchema = {
  Address: {type: 'string', nullable: false},
  City: {type: 'Microsoft.OData.SampleService.Models.TripPin.City', nullable: false}
};