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
import { ProductsAboveAveragePrice } from '../../../NorthwindModel/products_above_average_price.entity';
import { ProductsAboveAveragePriceModel } from '../../../NorthwindModel/products_above_average_price.model';
import { ProductsAboveAveragePriceCollection } from '../../../NorthwindModel/products_above_average_price.collection';
//#endregion

@Injectable()
export class ProductsAboveAveragePricesService extends ODataEntitySetService<ProductsAboveAveragePrice> {
  constructor(client: ODataClient) {
    super(client, 'Products_Above_Average_Prices', 'NorthwindModel.Products_Above_Average_Price');
  }
  //#region ODataApiGen Model
  productsAboveAveragePriceModel(attrs?: Partial<ProductsAboveAveragePrice>): ProductsAboveAveragePriceModel<ProductsAboveAveragePrice> {
    return this.entity().asModel<ProductsAboveAveragePriceModel<ProductsAboveAveragePrice>>(attrs || {});
  }//#endregion
  //#region ODataApiGen Collection
  productsAboveAveragePriceCollection(models?: Partial<ProductsAboveAveragePrice>[]): ProductsAboveAveragePriceCollection<ProductsAboveAveragePrice, ProductsAboveAveragePriceModel<ProductsAboveAveragePrice>> {
    return this.entities().asCollection<ProductsAboveAveragePriceModel<ProductsAboveAveragePrice>, ProductsAboveAveragePriceCollection<ProductsAboveAveragePrice, ProductsAboveAveragePriceModel<ProductsAboveAveragePrice>>>(models || []);
  }//#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}
