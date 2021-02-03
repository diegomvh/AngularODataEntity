import { Injectable } from '@angular/core';
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
import { Product } from './product.entity';
import { ProductModel } from './product.model';
import { ProductCollection } from './product.collection';
//#endregion

@Injectable()
export class ProductsService extends ODataEntitySetService<Product> {
  constructor(protected client: ODataClient) {
    super(client, 'Products', 'ODataDemo.Product');
  }

  //#region ODataApi Model
  productModel(attrs?: Partial<Product>): ProductModel<Product> {
    return this.entity().asModel<ProductModel<Product>>(attrs || {});
  }
  //#endregion
  //#region ODataApi Collection
  productCollection(models?: Partial<Product>[]): ProductCollection<Product, ProductModel<Product>> {
    return this.entities().asCollection<ProductModel<Product>, ProductCollection<Product, ProductModel<Product>>>(models || []);
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
