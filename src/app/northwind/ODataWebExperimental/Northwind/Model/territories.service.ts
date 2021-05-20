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
  Expand, 
  Select,
  HttpOptions} from 'angular-odata';

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
export class TerritoriesService extends ODataEntitySetService<Territory> {
  constructor(protected client: ODataClient) {
    super(client, 'Territories', 'NorthwindModel.Territory');
  }

  //#region ODataApi Model
  territoryModel(attrs?: Partial<Territory>): TerritoryModel<Territory> {
    return this.entity().asModel<TerritoryModel<Territory>>(attrs || {});
  }
  //#endregion
  //#region ODataApi Collection
  territoryCollection(models?: Partial<Territory>[]): TerritoryCollection<Territory, TerritoryModel<Territory>> {
    return this.entities().asCollection<TerritoryModel<Territory>, TerritoryCollection<Territory, TerritoryModel<Territory>>>(models || []);
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  public employees(entity: EntityKey<Territory>): ODataNavigationPropertyResource<Employee> {
    return this.entity(entity).navigationProperty<Employee>('Employees');
  }
  public region(entity: EntityKey<Territory>): ODataNavigationPropertyResource<Region> {
    return this.entity(entity).navigationProperty<Region>('Region');
  }
  //#endregion
}
