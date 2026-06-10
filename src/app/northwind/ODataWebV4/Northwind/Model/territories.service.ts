import { Injectable } from '@angular/core';
import { ODataClient, 
  ODataActionResource, 
  ODataActionOptions, 
  ODataFunctionResource, 
  ODataFunctionOptions, 
  ODataEntitySetService, 
  ODataOptions,
  EntityKey } from 'angular-odata';
import { TerritoryModel } from '../../../NorthwindModel/territory.model';
import { TerritoryCollection } from '../../../NorthwindModel/territory.collection';
import { Territory } from '../../../NorthwindModel/territory.entity';

// #region Custom
// #endregion Custom
@Injectable()
export class TerritoriesService extends ODataEntitySetService<Territory> {
  constructor(client: ODataClient) {
    super(client, 'Territories', 'NorthwindModel.Territory');
  }
  territoryModel(entity?: Partial<Territory>) {
    return this.model<TerritoryModel<Territory>>(entity);
  }
  territoryCollection(entities?: Partial<Territory>[]) {
    return this.collection<TerritoryModel<Territory>, TerritoryCollection<Territory, TerritoryModel<Territory>>>(entities);
  }
// #region Custom
// #endregion Custom
}
