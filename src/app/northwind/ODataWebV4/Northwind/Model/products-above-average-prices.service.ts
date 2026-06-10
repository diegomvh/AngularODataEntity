import { Injectable } from '@angular/core';
import { ODataClient, 
  ODataActionResource, 
  ODataActionOptions, 
  ODataFunctionResource, 
  ODataFunctionOptions, 
  ODataEntitySetService, 
  ODataOptions,
  EntityKey } from 'angular-odata';
import { ProductsAboveAveragePriceModel } from '../../../NorthwindModel/products-above-average-price.model';
import { ProductsAboveAveragePriceCollection } from '../../../NorthwindModel/products-above-average-price.collection';
import { ProductsAboveAveragePrice } from '../../../NorthwindModel/products-above-average-price.entity';

// #region Custom
// #endregion Custom
@Injectable()
export class ProductsAboveAveragePricesService extends ODataEntitySetService<ProductsAboveAveragePrice> {
  constructor(client: ODataClient) {
    super(client, 'Products_Above_Average_Prices', 'NorthwindModel.Products_Above_Average_Price');
  }
  productsAboveAveragePriceModel(entity?: Partial<ProductsAboveAveragePrice>) {
    return this.model<ProductsAboveAveragePriceModel<ProductsAboveAveragePrice>>(entity);
  }
  productsAboveAveragePriceCollection(entities?: Partial<ProductsAboveAveragePrice>[]) {
    return this.collection<ProductsAboveAveragePriceModel<ProductsAboveAveragePrice>, ProductsAboveAveragePriceCollection<ProductsAboveAveragePrice, ProductsAboveAveragePriceModel<ProductsAboveAveragePrice>>>(entities);
  }
// #region Custom
// #endregion Custom
}
