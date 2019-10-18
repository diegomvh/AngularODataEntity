import { PersonGender } from './persongender.enum';
import { Location, LocationSchema } from './location.entity';
import { Photo, PhotoSchema } from './photo.entity';
import { Trip, TripSchema } from './trip.entity';

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
  
  keys: [ 
    {name: 'UserName'}
  ],
  fields: [
    {name: 'UserName', type: 'string'},
    {name: 'FirstName', type: 'string'},
    {name: 'LastName', type: 'string'},
    {name: 'Emails', type: 'string', isCollection: true},
    {name: 'AddressInfo', type: 'Microsoft.OData.SampleService.Models.TripPin.Location', isCollection: true},
    {name: 'Gender', type: 'Microsoft.OData.SampleService.Models.TripPin.PersonGender', isFlags: false},
    {name: 'Concurrency', type: 'number'},
    {name: 'Friends', type: 'Microsoft.OData.SampleService.Models.TripPin.Person', isNullable: true, isCollection: true, isNavigation: true},
    {name: 'Trips', type: 'Microsoft.OData.SampleService.Models.TripPin.Trip', isNullable: true, isCollection: true, isNavigation: true},
    {name: 'Photo', type: 'Microsoft.OData.SampleService.Models.TripPin.Photo', isNullable: true, isNavigation: true}
  ]
};