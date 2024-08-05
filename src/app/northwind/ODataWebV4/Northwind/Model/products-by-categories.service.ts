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
import { ProductsByCategory } from '../../../NorthwindModel/products-by-category.entity';
import { ProductsByCategoryModel } from '../../../NorthwindModel/products-by-category.model';
import { ProductsByCategoryCollection } from '../../../NorthwindModel/products-by-category.collection';
//#endregion

@Injectable()
export class ProductsByCategoriesService extends ODataEntitySetService<ProductsByCategory> {
  constructor(client: ODataClient) {
    super(client, 'Products_by_Categories', 'NorthwindModel.Products_by_Category');
  }
  //#region ODataApiGen Model
  productsByCategoryModel(entity?: Partial<ProductsByCategory>): ProductsByCategoryModel<ProductsByCategory> {
    return this.entity().asModel<ProductsByCategoryModel<ProductsByCategory>>(entity);
  }//#endregion
  //#region ODataApiGen Collection
  productsByCategoryCollection(entities?: Partial<ProductsByCategory>[]): ProductsByCategoryCollection<ProductsByCategory, ProductsByCategoryModel<ProductsByCategory>> {
    return this.entities().asCollection<ProductsByCategoryModel<ProductsByCategory>, ProductsByCategoryCollection<ProductsByCategory, ProductsByCategoryModel<ProductsByCategory>>>(entities);
  }//#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}
