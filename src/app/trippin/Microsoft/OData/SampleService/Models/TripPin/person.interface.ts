import { PersonGender } from './persongender.enum';
import { Location, LocationSchema } from './location.interface';
import { Photo, PhotoSchema } from './photo.interface';
import { Trip, TripSchema } from './trip.interface';

export interface Person {
  UserName: string;
  FirstName: string;
  LastName: string;
  Emails: string[];
  AddressInfo: Location[];
  Gender: PersonGender;
  Concurrency: number;
  Friends?: Person[];
  Trips?: Trip[];
  Photo?: Photo
}

export const PersonSchema = {
  UserName: {type: 'string', isKey: true, ref: 'UserName'},
  FirstName: {type: 'string'},
  LastName: {type: 'string'},
  Emails: {type: 'string', isCollection: true},
  AddressInfo: {type: 'Microsoft.OData.SampleService.Models.TripPin.Location', isCollection: true},
  Gender: {type: 'Microsoft.OData.SampleService.Models.TripPin.PersonGender', isFlags: false},
  Concurrency: {type: 'number'},
  Friends: {type: 'Microsoft.OData.SampleService.Models.TripPin.Person', isNullable: true, isCollection: true, isNavigation: true},
  Trips: {type: 'Microsoft.OData.SampleService.Models.TripPin.Trip', isNullable: true, isCollection: true, isNavigation: true},
  Photo: {type: 'Microsoft.OData.SampleService.Models.TripPin.Photo', isNullable: true, isNavigation: true}
};