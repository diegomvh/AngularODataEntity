import { Injectable } from '@angular/core';
import { ODataClient, 
  ODataActionResource, 
  ODataActionOptions, 
  ODataFunctionResource, 
  ODataFunctionOptions, 
  ODataEntitySetService, 
  ODataOptions,
  EntityKey } from 'angular-odata';
import { PersonModel } from './person.model';
import { PersonCollection } from './person.collection';
import { Person } from './person.entity';

// #region Custom
// #endregion Custom
@Injectable()
export class PeopleService extends ODataEntitySetService<Person> {
  constructor(client: ODataClient) {
    super(client, 'People', 'Microsoft.OData.SampleService.Models.TripPin.Person');
  }
  personModel(entity?: Partial<Person>) {
    return this.model<PersonModel<Person>>(entity);
  }
  personCollection(entities?: Partial<Person>[]) {
    return this.collection<PersonModel<Person>, PersonCollection<Person, PersonModel<Person>>>(entities);
  }
// #region Custom
// #endregion Custom
}
