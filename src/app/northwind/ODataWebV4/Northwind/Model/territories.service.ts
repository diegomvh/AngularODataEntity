import { Injectable } from '@angular/core';
import { ODataClient, 
  ODataActionResource, 
  ODataActionOptions, 
  ODataFunctionResource, 
  ODataFunctionOptions, 
  ODataEntitySetService, 
  ODataOptions,
  EntityKey } from 'angular-odata';
import { Territory } from '../../../NorthwindModel/territory.entity';

@Injectable()
export class TerritoriesService extends ODataEntitySetService<Territory> {
  constructor(client: ODataClient) {
    super(client, 'Territories', 'NorthwindModel.Territory');
  }
  territoryModel(entity?: Partial<Territory>) {
    return this.model(entity);
  }
  territoryCollection(entities?: Partial<Territory>[]) {
    return this.collection(entities);
  }
}
