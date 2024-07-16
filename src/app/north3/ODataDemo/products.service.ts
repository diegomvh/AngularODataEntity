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
import { Product } from './product.entity';
import { ProductModel } from './product.model';
import { ProductCollection } from './product.collection';
//#endregion

@Injectable()
export class ProductsService extends ODataEntitySetService<Product> {
  constructor(client: ODataClient) {
    super(client, 'Products', 'ODataDemo.Product');
  }
  //#region ODataApiGen Model
  productModel(entity?: Partial<Product>): ProductModel<Product> {
    return this.entity().asModel<ProductModel<Product>>(entity);
  }//#endregion
  //#region ODataApiGen Collection
  productCollection(entities?: Partial<Product>[]): ProductCollection<Product, ProductModel<Product>> {
    return this.entities().asCollection<ProductModel<Product>, ProductCollection<Product, ProductModel<Product>>>(entities);
  }//#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}
