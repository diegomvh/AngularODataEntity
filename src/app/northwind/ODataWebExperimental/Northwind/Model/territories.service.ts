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
import { Employee } from '../../../NorthwindModel/employee.entity';
import { Region } from '../../../NorthwindModel/region.entity';
import { Territory } from '../../../NorthwindModel/territory.entity';
import { EmployeeModel } from '../../../NorthwindModel/employee.model';
import { RegionModel } from '../../../NorthwindModel/region.model';
import { TerritoryModel } from '../../../NorthwindModel/territory.model';
import { EmployeeCollection } from '../../../NorthwindModel/employee.collection';
import { RegionCollection } from '../../../NorthwindModel/region.collection';
import { TerritoryCollection } from '../../../NorthwindModel/territory.collection';
//#endregion

@Injectable()
export class TerritoriesService extends ODataEntityService<Territory> {
  constructor(protected client: ODataClient) {
    super(client, 'Territories', 'NorthwindModel.Territory');
  }

  territoryModel(): TerritoryModel<Territory> {
    return super.model() as TerritoryModel<Territory>;
  }
  
  territoryCollection(): TerritoryCollection<Territory, TerritoryModel<Territory>> {
    return super.collection() as TerritoryCollection<Territory, TerritoryModel<Territory>>;
  }
}
