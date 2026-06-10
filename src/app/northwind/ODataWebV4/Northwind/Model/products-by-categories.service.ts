import { Injectable } from '@angular/core';
import { ODataClient, 
  ODataActionResource, 
  ODataActionOptions, 
  ODataFunctionResource, 
  ODataFunctionOptions, 
  ODataEntitySetService, 
  ODataOptions,
  EntityKey } from 'angular-odata';
import { ProductsByCategoryModel } from '../../../NorthwindModel/products-by-category.model';
import { ProductsByCategoryCollection } from '../../../NorthwindModel/products-by-category.collection';
import { ProductsByCategory } from '../../../NorthwindModel/products-by-category.entity';

// #region Custom
// #endregion Custom
@Injectable()
export class ProductsByCategoriesService extends ODataEntitySetService<ProductsByCategory> {
  constructor(client: ODataClient) {
    super(client, 'Products_by_Categories', 'NorthwindModel.Products_by_Category');
  }
  productsByCategoryModel(entity?: Partial<ProductsByCategory>) {
    return this.model<ProductsByCategoryModel<ProductsByCategory>>(entity);
  }
  productsByCategoryCollection(entities?: Partial<ProductsByCategory>[]) {
    return this.collection<ProductsByCategoryModel<ProductsByCategory>, ProductsByCategoryCollection<ProductsByCategory, ProductsByCategoryModel<ProductsByCategory>>>(entities);
  }
// #region Custom
// #endregion Custom
}
