import { PersonMeta } from './person.meta';
import { PersonGender } from './persongender.enum';
import { LocationMeta } from './location.meta';
import { PhotoMeta } from './photo.meta';
import { TripMeta } from './trip.meta';
import { Location } from './location.entity';
import { Photo } from './photo.entity';
import { Trip } from './trip.entity';
import { PhotosService } from './photos.service';
import { PeopleService } from './people.service';
import { MeService } from './me.service';

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