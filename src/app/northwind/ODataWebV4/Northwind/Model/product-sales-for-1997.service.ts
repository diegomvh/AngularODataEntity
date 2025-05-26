import { Injectable } from '@angular/core';
import { ODataClient, 
  ODataActionResource, 
  ODataActionOptions, 
  ODataFunctionResource, 
  ODataFunctionOptions, 
  ODataEntitySetService, 
  ODataOptions,
  EntityKey } from 'angular-odata';
import { ProductSalesFor1997 } from '../../../NorthwindModel/product-sales-for-1997.entity';

@Injectable()
export class ProductSalesFor1997Service extends ODataEntitySetService<ProductSalesFor1997> {
  constructor(client: ODataClient) {
    super(client, 'Product_Sales_for_1997', 'NorthwindModel.Product_Sales_for_1997');
  }
  productSalesFor1997Model(entity?: Partial<ProductSalesFor1997>) {
    return this.model(entity);
  }
  productSalesFor1997Collection(entities?: Partial<ProductSalesFor1997>[]) {
    return this.collection(entities);
  }
}
