import { PersonGender } from './persongender.enum';
import { Location, LocationSchema } from './location.interface';
import { Photo, PhotoSchema } from './photo.interface';
import { Trip, TripSchema } from './trip.interface';

export interface Person {
  UserName: string;
  FirstName: string;
  LastName: string;
  Emails?: string[];
  AddressInfo?: Location[];
  Gender?: PersonGender;
  Concurrency: number;
  Friends?: Person[];
  Trips?: Trip[];
  Photo?: Photo
}

export const PersonSchema = {
  UserName: {type: 'string', key: true, ref: 'UserName', nullable: false},
  FirstName: {type: 'string', nullable: false},
  LastName: {type: 'string', nullable: false},
  Emails: {type: 'string', many: true},
  AddressInfo: {type: 'Microsoft.OData.SampleService.Models.TripPin.Location', many: true},
  Gender: {type: 'Microsoft.OData.SampleService.Models.TripPin.PersonGender', flags: false},
  Concurrency: {type: 'number', nullable: false},
  Friends: {type: 'Microsoft.OData.SampleService.Models.TripPin.Person', many: true, navigation: true},
  Trips: {type: 'Microsoft.OData.SampleService.Models.TripPin.Trip', many: true, navigation: true},
  Photo: {type: 'Microsoft.OData.SampleService.Models.TripPin.Photo', navigation: true}
};