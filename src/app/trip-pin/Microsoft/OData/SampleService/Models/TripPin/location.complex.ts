import { Duration } from 'angular-odata';
import { City } from './city.complex';

export const LocationType = 'Microsoft.OData.SampleService.Models.TripPin.Location';
export interface Location {
  Address: string;
  City: City;
}
