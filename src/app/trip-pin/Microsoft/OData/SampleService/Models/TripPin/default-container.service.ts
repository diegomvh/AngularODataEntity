import { Injectable } from '@angular/core';
import { ODataClient, 
  ODataActionResource, 
  ODataActionOptions, 
  ODataFunctionResource, 
  ODataFunctionOptions, 
  ODataEntitySetService, 
  ODataOptions,
  ODataBaseService,
  EntityKey } from 'angular-odata';

@Injectable()
export class DefaultContainerService extends ODataBaseService {
  constructor(client: ODataClient) {
    super(client, 'DefaultContainerService', 'TripPin');
  }
}
