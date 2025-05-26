import { Injectable } from '@angular/core';
import { ODataClient, 
  ODataActionResource, 
  ODataActionOptions, 
  ODataFunctionResource, 
  ODataFunctionOptions, 
  ODataEntitySetService, 
  ODataOptions,
  EntityKey } from 'angular-odata';
import { Category } from '../../../NorthwindModel/category.entity';

@Injectable()
export class CategoriesService extends ODataEntitySetService<Category> {
  constructor(client: ODataClient) {
    super(client, 'Categories', 'NorthwindModel.Category');
  }
  categoryModel(entity?: Partial<Category>) {
    return this.model(entity);
  }
  categoryCollection(entities?: Partial<Category>[]) {
    return this.collection(entities);
  }
}
