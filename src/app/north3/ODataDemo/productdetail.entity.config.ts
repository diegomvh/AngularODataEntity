﻿import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ProductDetail } from './productdetail.entity';
import { ProductDetailModel } from './productdetail.model';
import { ProductDetailCollection } from './productdetail.collection';
//#endregion

//#region ODataApi StrucutredTypeConfig
export const ProductDetailEntityConfig = {
  name: "ProductDetail",
  model: ProductDetailModel,
  collection: ProductDetailCollection,
  keys: [{ref: 'ProductID'}],
  fields: {
    ProductID: {type: 'Edm.Int32', nullable: false},
    Details: {type: 'Edm.String'},
    Product: {type: 'ODataDemo.Product', navigation: true}
  }
} as StructuredTypeConfig<ProductDetail>;
//#endregion