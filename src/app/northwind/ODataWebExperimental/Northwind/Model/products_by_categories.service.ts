﻿import { Injectable } from '@angular/core';
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
  HttpOptions
} from 'angular-odata';

//#region ODataApi Imports
import { ProductsByCategory } from '../../../NorthwindModel/products_by_category.entity';
import { ProductsByCategoryModel } from '../../../NorthwindModel/products_by_category.model';
import { ProductsByCategoryCollection } from '../../../NorthwindModel/products_by_category.collection';
//#endregion

@Injectable()
export class ProductsByCategoriesService extends ODataEntitySetService<ProductsByCategory> {
  constructor(protected client: ODataClient) {
    super(client, 'Products_by_Categories', 'NorthwindModel.Products_by_Category');
  }

  //#region ODataApi Model
  productsByCategoryModel(attrs?: Partial<ProductsByCategory>): ProductsByCategoryModel<ProductsByCategory> {
    return this.entity().asModel(attrs || {}) as ProductsByCategoryModel<ProductsByCategory>;
  }
  //#endregion
  //#region ODataApi Collection
  productsByCategoryCollection(models?: Partial<ProductsByCategory>[]): ProductsByCategoryCollection<ProductsByCategory, ProductsByCategoryModel<ProductsByCategory>> {
    return this.entities().asCollection(models || []) as ProductsByCategoryCollection<ProductsByCategory, ProductsByCategoryModel<ProductsByCategory>>;
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
