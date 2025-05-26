import { Injectable } from '@angular/core';
import { ODataClient, 
  ODataActionResource, 
  ODataActionOptions, 
  ODataFunctionResource, 
  ODataFunctionOptions, 
  ODataEntitySetService, 
  ODataOptions,
  EntityKey } from 'angular-odata';
import { ProductsByCategory } from '../../../NorthwindModel/products-by-category.entity';

@Injectable()
export class ProductsByCategoriesService extends ODataEntitySetService<ProductsByCategory> {
  constructor(client: ODataClient) {
    super(client, 'Products_by_Categories', 'NorthwindModel.Products_by_Category');
  }
  productsByCategoryModel(entity?: Partial<ProductsByCategory>) {
    return this.model(entity);
  }
  productsByCategoryCollection(entities?: Partial<ProductsByCategory>[]) {
    return this.collection(entities);
  }
}
