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
export class NorthwindEntitiesService extends ODataBaseService {
  constructor(client: ODataClient) {
    super(client, 'NorthwindEntities', 'Northwind');
  }
}
