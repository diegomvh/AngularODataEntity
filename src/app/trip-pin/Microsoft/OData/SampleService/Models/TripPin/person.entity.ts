

import { Location } from './location.complex';
import { PersonGender } from './person-gender.enum';
import { Trip } from './trip.entity';
import { Photo } from './photo.entity';

// #region Custom
// #endregion Custom
export const PersonEntityType = 'Microsoft.OData.SampleService.Models.TripPin.Person';
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
  Photo?: Photo;
// #region Custom
// #endregion Custom
}
