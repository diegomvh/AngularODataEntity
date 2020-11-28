import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { 
  ODataClient,
  ODataEntityService, 
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
export class ProductsService extends ODataEntityService<Product> {
  constructor(protected client: ODataClient) {
    super(client, 'Products', 'ODataDemo.Product');
  }

  //#region ODataApi Model
  productModel(): ProductModel<Product> {
    return this.entity().asModel() as ProductModel<Product>;
  }
  //#endregion
  //#region ODataApi Collection
  productCollection(): ProductCollection<Product, ProductModel<Product>> {
    return this.entities().asCollection() as ProductCollection<Product, ProductModel<Product>>;
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
