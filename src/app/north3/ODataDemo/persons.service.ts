import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApiGen ODataImports
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
  ODataOptions,
  ODataQueryArgumentsOptions
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Person } from './person.entity';
import { PersonModel } from './person.model';
import { PersonCollection } from './person.collection';
//#endregion

@Injectable()
export class PersonsService extends ODataEntitySetService<Person> {
  constructor(client: ODataClient) {
    super(client, 'Persons', 'ODataDemo.Person');
  }
  //#region ODataApiGen Model
  personModel(attrs?: Partial<Person>): PersonModel<Person> {
    return this.entity().asModel<PersonModel<Person>>(attrs || {});
  }//#endregion
  //#region ODataApiGen Collection
  personCollection(models?: Partial<Person>[]): PersonCollection<Person, PersonModel<Person>> {
    return this.entities().asCollection<PersonModel<Person>, PersonCollection<Person, PersonModel<Person>>>(models || []);
  }//#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}
