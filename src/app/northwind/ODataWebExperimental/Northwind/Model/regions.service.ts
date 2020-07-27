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
import { Region } from '../../../NorthwindModel/region.entity';
import { Territory } from '../../../NorthwindModel/territory.entity';
//#endregion

@Injectable()
export class RegionsService extends ODataEntityService<Region> {
  static path: string = 'Regions';
  static type: string = 'ODataWebExperimental.Northwind.Model.Regions';
  static entityType: string = 'NorthwindModel.Region';

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
