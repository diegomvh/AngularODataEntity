import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApiGen ODataImports
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
  ODataOptions,
  ODataQueryArgumentsOptions,
  ODataFunctionOptions,
  ODataActionOptions
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Region } from '../../../NorthwindModel/region.entity';
import { Territory } from '../../../NorthwindModel/territory.entity';
import { RegionModel } from '../../../NorthwindModel/region.model';
import { TerritoryModel } from '../../../NorthwindModel/territory.model';
import { RegionCollection } from '../../../NorthwindModel/region.collection';
import { TerritoryCollection } from '../../../NorthwindModel/territory.collection';
//#endregion

@Injectable()
export class RegionsService extends ODataEntitySetService<Region> {
  constructor(client: ODataClient) {
    super(client, 'Regions', 'NorthwindModel.Region');
  }
  //#region ODataApiGen Model
  regionModel(entity?: Partial<Region>): RegionModel<Region> {
    return this.entity().asModel<RegionModel<Region>>(entity);
  }//#endregion
  //#region ODataApiGen Collection
  regionCollection(entities?: Partial<Region>[]): RegionCollection<Region, RegionModel<Region>> {
    return this.entities().asCollection<RegionModel<Region>, RegionCollection<Region, RegionModel<Region>>>(entities);
  }//#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  public territories(key: EntityKey<Region>): ODataNavigationPropertyResource<Territory> { 
    return this.entity(key).navigationProperty<Territory>('Territories'); 
  }
  public fetchTerritories(key: EntityKey<Region>, options?: ODataQueryArgumentsOptions<Territory>) {
    return this.fetchNavigationProperty<Territory>(
      this.territories(key), 
      'entities', options) as Observable<ODataEntities<Territory>>;
  }
  public addTerritoryToTerritories(key: EntityKey<Region>, target: ODataEntityResource<ODataEntities<Territory>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.territories(key).reference()
      .add(target);
  }
  public removeTerritoryFromTerritories(key: EntityKey<Region>, {target, etag}: {target?: ODataEntityResource<ODataEntities<Territory>>, etag?: string} = {}): Observable<any> {
    return this.territories(key).reference()
      .remove(target);
  }
  //#endregion
}
