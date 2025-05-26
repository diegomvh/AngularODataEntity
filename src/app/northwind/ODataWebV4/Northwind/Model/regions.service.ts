import { Injectable } from '@angular/core';
import { ODataClient, 
  ODataActionResource, 
  ODataActionOptions, 
  ODataFunctionResource, 
  ODataFunctionOptions, 
  ODataEntitySetService, 
  ODataOptions,
  EntityKey } from 'angular-odata';
import { Region } from '../../../NorthwindModel/region.entity';

@Injectable()
export class RegionsService extends ODataEntitySetService<Region> {
  constructor(client: ODataClient) {
    super(client, 'Regions', 'NorthwindModel.Region');
  }
  regionModel(entity?: Partial<Region>) {
    return this.model(entity);
  }
  regionCollection(entities?: Partial<Region>[]) {
    return this.collection(entities);
  }
}
