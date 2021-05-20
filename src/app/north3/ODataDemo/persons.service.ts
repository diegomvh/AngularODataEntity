﻿import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { 
  ODataClient,
  ODataEntitySetService, 
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
  Expand, 
  Select,
  HttpOptions} from 'angular-odata';

//#region ODataApi Imports
import { Person } from './person.entity';
import { PersonModel } from './person.model';
import { PersonCollection } from './person.collection';
//#endregion

@Injectable()
export class PersonsService extends ODataEntitySetService<Person> {
  constructor(protected client: ODataClient) {
    super(client, 'Persons', 'ODataDemo.Person');
  }

  //#region ODataApi Model
  personModel(attrs?: Partial<Person>): PersonModel<Person> {
    return this.entity().asModel<PersonModel<Person>>(attrs || {});
  }
  //#endregion
  //#region ODataApi Collection
  personCollection(models?: Partial<Person>[]): PersonCollection<Person, PersonModel<Person>> {
    return this.entities().asCollection<PersonModel<Person>, PersonCollection<Person, PersonModel<Person>>>(models || []);
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
