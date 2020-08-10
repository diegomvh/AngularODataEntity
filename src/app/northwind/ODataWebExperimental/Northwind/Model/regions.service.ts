import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { 
  ODataClient,
  ODataEntityService, 
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
export class RegionsService extends ODataEntityService<Region> {
  constructor(protected client: ODataClient) {
    super(client, 'Regions', 'NorthwindModel.Region');
  }

  regionModel(): RegionModel<Region> {
    return super.model() as RegionModel<Region>;
  }
  
  regionCollection(): RegionCollection<Region, RegionModel<Region>> {
    return super.collection() as RegionCollection<Region, RegionModel<Region>>;
  }
}
