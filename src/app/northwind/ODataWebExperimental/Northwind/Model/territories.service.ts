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
  ODataQueryArgumentsOptions
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
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
  //#region ODataApiGen Model
  territoryModel(attrs?: Partial<Territory>): TerritoryModel<Territory> {
    return this.entity().asModel<TerritoryModel<Territory>>(attrs || {});
  }//#endregion
  //#region ODataApiGen Collection
  territoryCollection(models?: Partial<Territory>[]): TerritoryCollection<Territory, TerritoryModel<Territory>> {
    return this.entities().asCollection<TerritoryModel<Territory>, TerritoryCollection<Territory, TerritoryModel<Territory>>>(models || []);
  }//#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  public employees(key: EntityKey<Territory>): ODataNavigationPropertyResource<Employee> { 
    return this.entity(key).navigationProperty<Employee>('Employees'); 
  }
  public fetchEmployees(key: EntityKey<Territory>, options?: ODataQueryArgumentsOptions<Employee>) {
    return this.fetchNavigationProperty<Employee>(
      this.employees(key), 
      'entities', options) as Observable<ODataEntities<Employee>>;
  }
  public addEmployeeToEmployees(key: EntityKey<Territory>, target: ODataEntityResource<ODataEntities<Employee>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.employees(key).reference()
      .add(target);
  }
  public removeEmployeeFromEmployees(key: EntityKey<Territory>, {target, etag}: {target?: ODataEntityResource<ODataEntities<Employee>>, etag?: string} = {}): Observable<any> {
    return this.employees(key).reference()
      .remove(target);
  }
  public region(key: EntityKey<Territory>): ODataNavigationPropertyResource<Region> { 
    return this.entity(key).navigationProperty<Region>('Region'); 
  }
  public fetchRegion(key: EntityKey<Territory>, options?: ODataQueryArgumentsOptions<Region>) {
    return this.fetchNavigationProperty<Region>(
      this.region(key), 
      'entity', options) as Observable<ODataEntity<Region>>;
  }
  public setRegionAsRegion(key: EntityKey<Territory>, target: ODataEntityResource<ODataEntity<Region>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.region(key).reference()
      .set(target, {etag});
  }
  public unsetRegionAsRegion(key: EntityKey<Territory>, {target, etag}: {target?: ODataEntityResource<ODataEntity<Region>>, etag?: string} = {}): Observable<any> {
    return this.region(key).reference()
      .unset({etag});
  }
  //#endregion
}
