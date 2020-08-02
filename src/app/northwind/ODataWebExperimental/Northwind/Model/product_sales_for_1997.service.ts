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
import { ProductSalesFor1997 } from '../../../NorthwindModel/product_sales_for_1997.entity';
import { ProductSalesFor1997Model } from '../../../NorthwindModel/product_sales_for_1997.model';
import { ProductSalesFor1997Collection } from '../../../NorthwindModel/product_sales_for_1997.collection';
//#endregion

@Injectable()
export class ProductSalesFor1997Service extends ODataService<ProductSalesFor1997> {
  constructor(protected client: ODataClient) {
    super(client, 'Product_Sales_for_1997', 'NorthwindModel.Product_Sales_for_1997');
  }

  productSalesFor1997Model(): ProductSalesFor1997Model<ProductSalesFor1997> {
    return super.model() as ProductSalesFor1997Model<ProductSalesFor1997>;
  }
  
  productSalesFor1997Collection(): ProductSalesFor1997Collection<ProductSalesFor1997, ProductSalesFor1997Model<ProductSalesFor1997>> {
    return super.collection() as ProductSalesFor1997Collection<ProductSalesFor1997, ProductSalesFor1997Model<ProductSalesFor1997>>;
  }
}
