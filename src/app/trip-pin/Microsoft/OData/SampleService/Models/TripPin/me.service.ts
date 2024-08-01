import { Injectable } from '@angular/core';
import { ODataClient, 
  ODataActionResource, 
  ODataActionOptions, 
  ODataFunctionResource, 
  ODataFunctionOptions, 
  ODataEntitySetService, 
  ODataOptions,
  ODataSingletonService,
  EntityKey } from 'angular-odata';
import { Person } from './person.entity';

@Injectable()
export class MeService extends ODataSingletonService<Person> {
  constructor(client: ODataClient) {
    super(client, 'MeService', 'Microsoft.OData.SampleService.Models.TripPin.Person');
  }
}
