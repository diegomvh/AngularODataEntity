import { Injectable } from '@angular/core';
import { ODataClient, 
  ODataActionResource, 
  ODataActionOptions, 
  ODataFunctionResource, 
  ODataFunctionOptions, 
  ODataEntitySetService, 
  ODataOptions,
  EntityKey } from 'angular-odata';
import { CategoryModel } from '../../../NorthwindModel/category.model';
import { CategoryCollection } from '../../../NorthwindModel/category.collection';
import { Category } from '../../../NorthwindModel/category.entity';

// #region Custom
// #endregion Custom
@Injectable()
export class CategoriesService extends ODataEntitySetService<Category> {
  constructor(client: ODataClient) {
    super(client, 'Categories', 'NorthwindModel.Category');
  }
  categoryModel(entity?: Partial<Category>) {
    return this.model<CategoryModel<Category>>(entity);
  }
  categoryCollection(entities?: Partial<Category>[]) {
    return this.collection<CategoryModel<Category>, CategoryCollection<Category, CategoryModel<Category>>>(entities);
  }
// #region Custom
// #endregion Custom
}
