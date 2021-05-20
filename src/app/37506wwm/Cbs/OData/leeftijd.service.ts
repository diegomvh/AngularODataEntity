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
import { Category } from './category.entity';
import { CategoryModel } from './category.model';
import { CategoryCollection } from './category.collection';
//#endregion

@Injectable()
export class LeeftijdService extends ODataEntitySetService<Category> {
  constructor(protected client: ODataClient) {
    super(client, 'Leeftijd', 'Cbs.OData.Category');
  }

  //#region ODataApi Model
  categoryModel(attrs?: Partial<Category>): CategoryModel<Category> {
    return this.entity().asModel<CategoryModel<Category>>(attrs || {});
  }
  //#endregion
  //#region ODataApi Collection
  categoryCollection(models?: Partial<Category>[]): CategoryCollection<Category, CategoryModel<Category>> {
    return this.entities().asCollection<CategoryModel<Category>, CategoryCollection<Category, CategoryModel<Category>>>(models || []);
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
