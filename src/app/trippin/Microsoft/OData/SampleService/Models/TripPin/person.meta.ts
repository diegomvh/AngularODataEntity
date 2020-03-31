import { PeopleService } from './people.service';
import { PersonGender } from './persongender.enum';
import { LocationMeta } from './location.meta';
import { PhotoMeta } from './photo.meta';
import { TripMeta } from './trip.meta';

export const PersonMeta = {
  type: "Microsoft.OData.SampleService.Models.TripPin.Person",
  set: "People",
  fields: {
    UserName: {type: 'string', key: true, ref: 'UserName', nullable: false},
    FirstName: {type: 'string', nullable: false},
    LastName: {type: 'string', nullable: false},
    Emails: {type: 'string', collection: true},
    AddressInfo: {type: 'Microsoft.OData.SampleService.Models.TripPin.Location', collection: true},
    Gender: {type: 'Microsoft.OData.SampleService.Models.TripPin.PersonGender', flags: false},
    Concurrency: {type: 'number', nullable: false},
    Friends: {type: 'Microsoft.OData.SampleService.Models.TripPin.Person', collection: true, navigation: true},
    Trips: {type: 'Microsoft.OData.SampleService.Models.TripPin.Trip', collection: true, navigation: true},
    Photo: {type: 'Microsoft.OData.SampleService.Models.TripPin.Photo', navigation: true}
  }
};