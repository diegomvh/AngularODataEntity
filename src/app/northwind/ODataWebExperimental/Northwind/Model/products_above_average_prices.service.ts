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
import { ProductsAboveAveragePrice } from '../../../NorthwindModel/products_above_average_price.entity';
import { ProductsAboveAveragePriceModel } from '../../../NorthwindModel/products_above_average_price.model';
import { ProductsAboveAveragePriceCollection } from '../../../NorthwindModel/products_above_average_price.collection';
//#endregion

@Injectable()
export class ProductsAboveAveragePricesService extends ODataEntitySetService<ProductsAboveAveragePrice> {
  constructor(protected client: ODataClient) {
    super(client, 'Products_Above_Average_Prices', 'NorthwindModel.Products_Above_Average_Price');
  }

  //#region ODataApi Model
  productsAboveAveragePriceModel(attrs?: Partial<ProductsAboveAveragePrice>): ProductsAboveAveragePriceModel<ProductsAboveAveragePrice> {
    return this.entity().asModel<ProductsAboveAveragePriceModel<ProductsAboveAveragePrice>>(attrs || {});
  }
  //#endregion
  //#region ODataApi Collection
  productsAboveAveragePriceCollection(models?: Partial<ProductsAboveAveragePrice>[]): ProductsAboveAveragePriceCollection<ProductsAboveAveragePrice, ProductsAboveAveragePriceModel<ProductsAboveAveragePrice>> {
    return this.entities().asCollection<ProductsAboveAveragePriceModel<ProductsAboveAveragePrice>, ProductsAboveAveragePriceCollection<ProductsAboveAveragePrice, ProductsAboveAveragePriceModel<ProductsAboveAveragePrice>>>(models || []);
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
