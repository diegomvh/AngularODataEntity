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
import { ProductDetail } from './product-detail.entity';
import { ProductDetailModel } from './product-detail.model';
import { ProductDetailCollection } from './product-detail.collection';
//#endregion

@Injectable()
export class ProductDetailsService extends ODataEntitySetService<ProductDetail> {
  constructor(client: ODataClient) {
    super(client, 'ProductDetails', 'ODataDemo.ProductDetail');
  }
  //#region ODataApiGen Model
  productDetailModel(entity?: Partial<ProductDetail>): ProductDetailModel<ProductDetail> {
    return this.entity().asModel<ProductDetailModel<ProductDetail>>(entity);
  }//#endregion
  //#region ODataApiGen Collection
  productDetailCollection(entities?: Partial<ProductDetail>[]): ProductDetailCollection<ProductDetail, ProductDetailModel<ProductDetail>> {
    return this.entities().asCollection<ProductDetailModel<ProductDetail>, ProductDetailCollection<ProductDetail, ProductDetailModel<ProductDetail>>>(entities);
  }//#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}
