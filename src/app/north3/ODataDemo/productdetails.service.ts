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
import { ProductDetail } from './productdetail.entity';
import { ProductDetailModel } from './productdetail.model';
import { ProductDetailCollection } from './productdetail.collection';
//#endregion

@Injectable()
export class ProductDetailsService extends ODataEntitySetService<ProductDetail> {
  constructor(protected client: ODataClient) {
    super(client, 'ProductDetails', 'ODataDemo.ProductDetail');
  }

  //#region ODataApi Model
  productDetailModel(attrs?: Partial<ProductDetail>): ProductDetailModel<ProductDetail> {
    return this.entity().asModel(attrs || {}) as ProductDetailModel<ProductDetail>;
  }
  //#endregion
  //#region ODataApi Collection
  productDetailCollection(models?: Partial<ProductDetail>[]): ProductDetailCollection<ProductDetail, ProductDetailModel<ProductDetail>> {
    return this.entities().asCollection(models || []) as ProductDetailCollection<ProductDetail, ProductDetailModel<ProductDetail>>;
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
