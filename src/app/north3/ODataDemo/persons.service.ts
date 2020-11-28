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
import { Person } from './person.entity';
import { PersonModel } from './person.model';
import { PersonCollection } from './person.collection';
//#endregion

@Injectable()
export class PersonsService extends ODataEntityService<Person> {
  constructor(protected client: ODataClient) {
    super(client, 'Persons', 'ODataDemo.Person');
  }

  //#region ODataApi Model
  personModel(): PersonModel<Person> {
    return super.model() as PersonModel<Person>;
  }
  //#endregion
  //#region ODataApi Collection
  personCollection(): PersonCollection<Person, PersonModel<Person>> {
    return super.collection() as PersonCollection<Person, PersonModel<Person>>;
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
