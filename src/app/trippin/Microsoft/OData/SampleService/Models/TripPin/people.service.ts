import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { 
  ODataClient,
  ODataEntityService, 
  ODataEntity, 
  ODataEntities, 
  ODataProperty, 
  EntityKey,
  Duration,
  ODataEntityResource,
  ODataEntitySetResource,
  ODataNavigationPropertyResource,
  ODataActionResource,
  ODataFunctionResource,
  HttpOptions
} from 'angular-odata';

//#region ODataApi Imports
import { PersonGender } from './persongender.enum';
import { Location } from './location.entity';
import { Photo } from './photo.entity';
import { Person } from './person.entity';
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

@Injectable()
export class PeopleService extends ODataEntityService<Person> {
  constructor(protected client: ODataClient) {
    super(client, 'People', 'Microsoft.OData.SampleService.Models.TripPin.Person');
  }

  personModel(): PersonModel<Person> {
    return super.model() as PersonModel<Person>;
  }
  
  personCollection(): PersonCollection<Person, PersonModel<Person>> {
    return super.collection() as PersonCollection<Person, PersonModel<Person>>;
  }
}
