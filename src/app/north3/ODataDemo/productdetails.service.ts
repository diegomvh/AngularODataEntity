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
  ODataQueryArgumentsOptions
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ProductDetail } from './productdetail.entity';
import { ProductDetailModel } from './productdetail.model';
import { ProductDetailCollection } from './productdetail.collection';
//#endregion

@Injectable()
export class ProductDetailsService extends ODataEntitySetService<ProductDetail> {
  constructor(client: ODataClient) {
    super(client, 'ProductDetails', 'ODataDemo.ProductDetail');
  }
  //#region ODataApiGen Model
  productDetailModel(attrs?: Partial<ProductDetail>): ProductDetailModel<ProductDetail> {
    return this.entity().asModel<ProductDetailModel<ProductDetail>>(attrs || {});
  }//#endregion
  //#region ODataApiGen Collection
  productDetailCollection(models?: Partial<ProductDetail>[]): ProductDetailCollection<ProductDetail, ProductDetailModel<ProductDetail>> {
    return this.entities().asCollection<ProductDetailModel<ProductDetail>, ProductDetailCollection<ProductDetail, ProductDetailModel<ProductDetail>>>(models || []);
  }//#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}
