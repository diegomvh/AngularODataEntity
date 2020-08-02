import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { 
  ODataClient,
  ODataService, 
  ODataEntity, 
  ODataEntities, 
  ODataProperty, 
  EntityKey,
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
export class ProductsAboveAveragePricesService extends ODataService<ProductsAboveAveragePrice> {
  constructor(protected client: ODataClient) {
    super(client, 'Products_Above_Average_Prices', 'NorthwindModel.Products_Above_Average_Price');
  }

  productsAboveAveragePriceModel(): ProductsAboveAveragePriceModel<ProductsAboveAveragePrice> {
    return super.model() as ProductsAboveAveragePriceModel<ProductsAboveAveragePrice>;
  }
  
  productsAboveAveragePricesCollection(): ProductsAboveAveragePriceCollection<ProductsAboveAveragePrice, ProductsAboveAveragePriceModel<ProductsAboveAveragePrice>> {
    return super.collection() as ProductsAboveAveragePriceCollection<ProductsAboveAveragePrice, ProductsAboveAveragePriceModel<ProductsAboveAveragePrice>>;
  }
}
