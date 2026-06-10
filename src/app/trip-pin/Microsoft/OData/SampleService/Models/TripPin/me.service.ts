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

// #region Custom
// #endregion Custom
@Injectable()
export class MeService extends ODataSingletonService<Person> {
  constructor(client: ODataClient) {
    super(client, 'Me', 'Microsoft.OData.SampleService.Models.TripPin.Person');
  }
// #region Custom
// #endregion Custom
}
