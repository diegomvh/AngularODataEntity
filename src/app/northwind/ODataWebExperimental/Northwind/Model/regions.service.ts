import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { 
  ODataClient,
  ODataService, 
  ODataEntity, 
  ODataEntities, 
  ODataProperty, 
  EntityKey,
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
//#endregion

@Injectable()
export class RegionsService extends ODataService<Region> {
  constructor(protected client: ODataClient) {
    super(client, 'Regions', 'NorthwindModel.Region');
  }

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
