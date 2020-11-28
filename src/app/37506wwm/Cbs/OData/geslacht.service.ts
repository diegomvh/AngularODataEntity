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
import { Category } from './category.entity';
import { CategoryModel } from './category.model';
import { CategoryCollection } from './category.collection';
//#endregion

@Injectable()
export class GeslachtService extends ODataEntityService<Category> {
  constructor(protected client: ODataClient) {
    super(client, 'Geslacht', 'Cbs.OData.Category');
  }

  //#region ODataApi Model
  categoryModel(): CategoryModel<Category> {
    return this.entity().asModel() as CategoryModel<Category>;
  }
  //#endregion
  //#region ODataApi Collection
  categoryCollection(): CategoryCollection<Category, CategoryModel<Category>> {
    return this.entities().asCollection() as CategoryCollection<Category, CategoryModel<Category>>;
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
