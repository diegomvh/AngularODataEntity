import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {
  ODataModel,
  ODataCollection,
  ODataOptions,
  ODataQueryArgumentsOptions,
  ODataFunctionOptions,
  ODataActionOptions
} from 'angular-odata';
import { Person } from './person.entity';
import { PersonModel } from './person.model';
import { Location } from './location.complex';
import { LocationModel } from './location.model';
import { LocationCollection } from './location.collection';
import { PersonGender } from './person-gender.enum';
import { Trip } from './trip.entity';
import { TripModel } from './trip.model';
import { TripCollection } from './trip.collection';
import { Photo } from './photo.entity';
import { PhotoModel } from './photo.model';

export class PersonCollection<E extends Person, M extends PersonModel<E>> extends ODataCollection<E, M> {
  
}
