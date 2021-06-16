import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region AngularOData Imports
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
  Expand, 
  Select,
  HttpOptions,
  HttpActionOptions,
  HttpFunctionOptions,
  HttpNavigationPropertyOptions
} from 'angular-odata';//#endregion

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
    return this.entity().asModel<ProductDetailModel<ProductDetail>>(attrs || {});
  }//#endregion
  //#region ODataApi Collection
  productDetailCollection(models?: Partial<ProductDetail>[]): ProductDetailCollection<ProductDetail, ProductDetailModel<ProductDetail>> {
    return this.entities().asCollection<ProductDetailModel<ProductDetail>, ProductDetailCollection<ProductDetail, ProductDetailModel<ProductDetail>>>(models || []);
  }//#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
