import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { 
  ODataEntityService, 
  ODataEntityAnnotations, 
  ODataEntitiesAnnotations, 
  ODataPropertyAnnotations, 
  EntityKey,
  ODataEntityResource,
  ODataEntitySetResource,
  ODataNavigationPropertyResource,
  HttpOptions
} from 'angular-odata';

//#region ODataApi Imports
import { Employee } from '../../../NorthwindModel/employee.entity';
import { Region } from '../../../NorthwindModel/region.entity';
import { Territory } from '../../../NorthwindModel/territory.entity';
//#endregion

@Injectable()
export class TerritoriesService extends ODataEntityService<Territory> {
  static path: string = 'Territories';
  static type: string = 'ODataWebExperimental.Northwind.Model.Territories';
  static entityType: string = 'NorthwindModel.Territory';

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
