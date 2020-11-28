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
import { CategoryGroup } from './categorygroup.entity';
import { CategoryGroupModel } from './categorygroup.model';
import { CategoryGroupCollection } from './categorygroup.collection';
//#endregion

@Injectable()
export class CategoryGroupsService extends ODataEntityService<CategoryGroup> {
  constructor(protected client: ODataClient) {
    super(client, 'CategoryGroups', 'Cbs.OData.CategoryGroup');
  }

  //#region ODataApi Model
  categoryGroupModel(): CategoryGroupModel<CategoryGroup> {
    return this.entity().asModel() as CategoryGroupModel<CategoryGroup>;
  }
  //#endregion
  //#region ODataApi Collection
  categoryGroupCollection(): CategoryGroupCollection<CategoryGroup, CategoryGroupModel<CategoryGroup>> {
    return this.entities().asCollection() as CategoryGroupCollection<CategoryGroup, CategoryGroupModel<CategoryGroup>>;
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
