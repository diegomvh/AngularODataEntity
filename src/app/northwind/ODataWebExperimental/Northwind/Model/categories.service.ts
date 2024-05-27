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
  ODataQueryArgumentsOptions,
  ODataFunctionOptions,
  ODataActionOptions
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Category } from '../../../NorthwindModel/category.entity';
import { Product } from '../../../NorthwindModel/product.entity';
import { CategoryModel } from '../../../NorthwindModel/category.model';
import { ProductModel } from '../../../NorthwindModel/product.model';
import { CategoryCollection } from '../../../NorthwindModel/category.collection';
import { ProductCollection } from '../../../NorthwindModel/product.collection';
//#endregion

@Injectable()
export class CategoriesService extends ODataEntitySetService<Category> {
  constructor(client: ODataClient) {
    super(client, 'Categories', 'NorthwindModel.Category');
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
  public products(key: EntityKey<Category>): ODataNavigationPropertyResource<Product> { 
    return this.entity(key).navigationProperty<Product>('Products'); 
  }
  public fetchProducts(key: EntityKey<Category>, options?: ODataQueryArgumentsOptions<Product>) {
    return this.fetchNavigationProperty<Product>(
      this.products(key), 
      'entities', options) as Observable<ODataEntities<Product>>;
  }
  public addProductToProducts(key: EntityKey<Category>, target: ODataEntityResource<ODataEntities<Product>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.products(key).reference()
      .add(target);
  }
  public removeProductFromProducts(key: EntityKey<Category>, {target, etag}: {target?: ODataEntityResource<ODataEntities<Product>>, etag?: string} = {}): Observable<any> {
    return this.products(key).reference()
      .remove(target);
  }
  //#endregion
}
