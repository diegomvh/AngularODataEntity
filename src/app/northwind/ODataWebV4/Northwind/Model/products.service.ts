import { Injectable } from '@angular/core';
import { ODataClient, 
  ODataActionResource, 
  ODataActionOptions, 
  ODataFunctionResource, 
  ODataFunctionOptions, 
  ODataEntitySetService, 
  ODataOptions,
  EntityKey } from 'angular-odata';
import { ProductModel } from '../../../NorthwindModel/product.model';
import { ProductCollection } from '../../../NorthwindModel/product.collection';
import { Product } from '../../../NorthwindModel/product.entity';

// #region Custom
// #endregion Custom
@Injectable()
export class ProductsService extends ODataEntitySetService<Product> {
  constructor(client: ODataClient) {
    super(client, 'Products', 'NorthwindModel.Product');
  }
  productModel(entity?: Partial<Product>) {
    return this.model<ProductModel<Product>>(entity);
  }
  productCollection(entities?: Partial<Product>[]) {
    return this.collection<ProductModel<Product>, ProductCollection<Product, ProductModel<Product>>>(entities);
  }
// #region Custom
// #endregion Custom
}
