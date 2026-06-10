import { Injectable } from '@angular/core';
import { ODataClient, 
  ODataActionResource, 
  ODataActionOptions, 
  ODataFunctionResource, 
  ODataFunctionOptions, 
  ODataEntitySetService, 
  ODataOptions,
  EntityKey } from 'angular-odata';
import { RegionModel } from '../../../NorthwindModel/region.model';
import { RegionCollection } from '../../../NorthwindModel/region.collection';
import { Region } from '../../../NorthwindModel/region.entity';

// #region Custom
// #endregion Custom
@Injectable()
export class RegionsService extends ODataEntitySetService<Region> {
  constructor(client: ODataClient) {
    super(client, 'Regions', 'NorthwindModel.Region');
  }
  regionModel(entity?: Partial<Region>) {
    return this.model<RegionModel<Region>>(entity);
  }
  regionCollection(entities?: Partial<Region>[]) {
    return this.collection<RegionModel<Region>, RegionCollection<Region, RegionModel<Region>>>(entities);
  }
// #region Custom
// #endregion Custom
}
