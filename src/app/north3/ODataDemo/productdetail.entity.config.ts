import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ProductDetail } from './productdetail.entity';
import { ProductDetailModel } from './productdetail.model';
import { ProductDetailCollection } from './productdetail.collection';
//#endregion

export const ProductDetailConfig = {
  name: "ProductDetail",
  model: ProductDetailModel,
  collection: ProductDetailCollection,
  annotations: [],
  fields: {
    ProductID: {type: 'Edm.Int32', key: true, ref: 'ProductID', nullable: false},
    Details: {type: 'Edm.String'},
    Product: {type: 'ODataDemo.Product', navigation: true}
  }
} as EntityConfig<ProductDetail>;