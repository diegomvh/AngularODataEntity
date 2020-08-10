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
import { Category } from '../../../NorthwindModel/category.entity';
import { Product } from '../../../NorthwindModel/product.entity';
import { CategoryModel } from '../../../NorthwindModel/category.model';
import { ProductModel } from '../../../NorthwindModel/product.model';
import { CategoryCollection } from '../../../NorthwindModel/category.collection';
import { ProductCollection } from '../../../NorthwindModel/product.collection';
//#endregion

@Injectable()
export class CategoriesService extends ODataEntityService<Category> {
  constructor(protected client: ODataClient) {
    super(client, 'Categories', 'NorthwindModel.Category');
  }

  categoryModel(): CategoryModel<Category> {
    return super.model() as CategoryModel<Category>;
  }
  
  categoryCollection(): CategoryCollection<Category, CategoryModel<Category>> {
    return super.collection() as CategoryCollection<Category, CategoryModel<Category>>;
  }
}
