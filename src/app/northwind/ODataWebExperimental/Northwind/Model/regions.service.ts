import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { 
  ODataClient,
  ODataEntitySetService, 
  ODataEntity, 
  ODataEntities, 
  ODataProperty, 
  EntityKey,
  Duration,
  ODataEntityResource,
  ODataEntitySetResource,
  ODataNavigationPropertyResource,
  ODataActionResource,
  ODataFunctionResource,
  HttpOptions
} from 'angular-odata';

//#region ODataApi Imports
import { Region } from '../../../NorthwindModel/region.entity';
import { Territory } from '../../../NorthwindModel/territory.entity';
import { RegionModel } from '../../../NorthwindModel/region.model';
import { TerritoryModel } from '../../../NorthwindModel/territory.model';
import { RegionCollection } from '../../../NorthwindModel/region.collection';
import { TerritoryCollection } from '../../../NorthwindModel/territory.collection';
//#endregion

@Injectable()
export class RegionsService extends ODataEntitySetService<Region> {
  constructor(protected client: ODataClient) {
    super(client, 'Regions', 'NorthwindModel.Region');
  }

  //#region ODataApi Model
  regionModel(attrs?: Partial<Region>): RegionModel<Region> {
    return this.entity().asModel<RegionModel<Region>>(attrs || {});
  }
  //#endregion
  //#region ODataApi Collection
  regionCollection(models?: Partial<Region>[]): RegionCollection<Region, RegionModel<Region>> {
    return this.entities().asCollection<RegionModel<Region>, RegionCollection<Region, RegionModel<Region>>>(models || []);
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  public territories(entity: EntityKey<Region>): ODataNavigationPropertyResource<Territory> {
    return this.entity(entity).navigationProperty<Territory>('Territories');
  }
  //#endregion
}
