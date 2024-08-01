import { Injectable } from '@angular/core';
import { ODataClient, 
  ODataActionResource, 
  ODataActionOptions, 
  ODataFunctionResource, 
  ODataFunctionOptions, 
  ODataEntitySetService, 
  ODataOptions,
  EntityKey } from 'angular-odata';
import { Person } from './person.entity';

@Injectable()
export class PeopleService extends ODataEntitySetService<Person> {
  constructor(client: ODataClient) {
    super(client, 'PeopleService', 'Microsoft.OData.SampleService.Models.TripPin.Person');
  }
  personModel(entity?: Partial<Person>) {
    return this.model(entity);
  }
  personCollection(entities?: Partial<Person>[]) {
    return this.collection(entities);
  }
}
