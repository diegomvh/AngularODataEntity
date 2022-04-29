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
import { Category } from './category.entity';
import { CategoryModel } from './category.model';
import { CategoryCollection } from './category.collection';
//#endregion

@Injectable()
export class CategoriesService extends ODataEntitySetService<Category> {
  constructor(client: ODataClient) {
    super(client, 'Categories', 'ODataDemo.Category');
  }
  //#region ODataApiGen Model
  categoryModel(attrs?: Partial<Category>): CategoryModel<Category> {
    return this.entity().asModel<CategoryModel<Category>>(attrs || {});
  }//#endregion
  //#region ODataApiGen Collection
  categoryCollection(models?: Partial<Category>[]): CategoryCollection<Category, CategoryModel<Category>> {
    return this.entities().asCollection<CategoryModel<Category>, CategoryCollection<Category, CategoryModel<Category>>>(models || []);
  }//#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}
