import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region AngularOData Imports
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
  HttpOptions,
  HttpActionOptions,
  HttpFunctionOptions,
  HttpNavigationPropertyOptions
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { CategoryGroup } from './categorygroup.entity';
import { CategoryGroupModel } from './categorygroup.model';
import { CategoryGroupCollection } from './categorygroup.collection';
//#endregion

@Injectable()
export class CategoryGroupsService extends ODataEntitySetService<CategoryGroup> {
  constructor(protected client: ODataClient) {
    super(client, 'CategoryGroups', 'Cbs.OData.CategoryGroup');
  }
  //#region ODataApi Model
  categoryGroupModel(attrs?: Partial<CategoryGroup>): CategoryGroupModel<CategoryGroup> {
    return this.entity().asModel<CategoryGroupModel<CategoryGroup>>(attrs || {});
  }//#endregion
  //#region ODataApi Collection
  categoryGroupCollection(models?: Partial<CategoryGroup>[]): CategoryGroupCollection<CategoryGroup, CategoryGroupModel<CategoryGroup>> {
    return this.entities().asCollection<CategoryGroupModel<CategoryGroup>, CategoryGroupCollection<CategoryGroup, CategoryGroupModel<CategoryGroup>>>(models || []);
  }//#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
