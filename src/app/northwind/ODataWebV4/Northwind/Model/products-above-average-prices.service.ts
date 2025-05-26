import { Injectable } from '@angular/core';
import { ODataClient, 
  ODataActionResource, 
  ODataActionOptions, 
  ODataFunctionResource, 
  ODataFunctionOptions, 
  ODataEntitySetService, 
  ODataOptions,
  EntityKey } from 'angular-odata';
import { ProductsAboveAveragePrice } from '../../../NorthwindModel/products-above-average-price.entity';

@Injectable()
export class ProductsAboveAveragePricesService extends ODataEntitySetService<ProductsAboveAveragePrice> {
  constructor(client: ODataClient) {
    super(client, 'Products_Above_Average_Prices', 'NorthwindModel.Products_Above_Average_Price');
  }
  productsAboveAveragePriceModel(entity?: Partial<ProductsAboveAveragePrice>) {
    return this.model(entity);
  }
  productsAboveAveragePriceCollection(entities?: Partial<ProductsAboveAveragePrice>[]) {
    return this.collection(entities);
  }
}
