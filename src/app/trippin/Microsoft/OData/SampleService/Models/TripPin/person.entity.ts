//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { PersonGender } from './persongender.enum';
import { Location } from './location.complex';
import { Photo } from './photo.entity';
import { Trip } from './trip.entity';
import { LocationModel } from './location.model';
import { PhotoModel } from './photo.model';
import { PersonModel } from './person.model';
import { TripModel } from './trip.model';
import { LocationCollection } from './location.collection';
import { PhotoCollection } from './photo.collection';
import { PersonCollection } from './person.collection';
import { TripCollection } from './trip.collection';
//#endregion

export interface Person {
  //#region ODataApiGen Properties
  UserName: string;
  FirstName: string;
  LastName: string;
  Emails?: string[];
  AddressInfo?: Location[];
  Gender?: PersonGender;
  Concurrency: number;
  Friends?: Person[];
  Trips?: Trip[];
  Photo?: Photo;
  //#endregion
}