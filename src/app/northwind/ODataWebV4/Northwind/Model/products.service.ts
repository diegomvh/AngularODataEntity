import { Injectable } from '@angular/core';
import { ODataClient, 
  ODataActionResource, 
  ODataActionOptions, 
  ODataFunctionResource, 
  ODataFunctionOptions, 
  ODataEntitySetService, 
  ODataOptions,
  EntityKey } from 'angular-odata';
import { Product } from '../../../NorthwindModel/product.entity';

@Injectable()
export class ProductsService extends ODataEntitySetService<Product> {
  constructor(client: ODataClient) {
    super(client, 'Products', 'NorthwindModel.Product');
  }
  productModel(entity?: Partial<Product>) {
    return this.model(entity);
  }
  productCollection(entities?: Partial<Product>[]) {
    return this.collection(entities);
  }
}
