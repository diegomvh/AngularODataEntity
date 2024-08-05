import { Duration } from 'angular-odata';
import { Location } from './location.complex';
import { PersonGender } from './person-gender.enum';
import { Trip } from './trip.entity';
import { Photo } from './photo.entity';

export const PersonType = 'Microsoft.OData.SampleService.Models.TripPin.Person';
export interface Person {
  UserName: string;
  FirstName: string;
  LastName: string;
  Emails: string;
  AddressInfo: Location;
  Gender: PersonGender;
  Concurrency: number;
  Friends: Person;
  Trips: Trip;
  Photo: Photo;
}
