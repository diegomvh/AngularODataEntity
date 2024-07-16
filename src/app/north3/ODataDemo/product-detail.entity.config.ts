//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ProductDetail } from './product-detail.entity';
import { ProductDetailModel } from './product-detail.model';
import { ProductDetailCollection } from './product-detail.collection';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ProductDetailEntityConfig = {
  name: 'ProductDetail',
  model: ProductDetailModel,
  collection: ProductDetailCollection,
  keys: [{name: 'ProductID'}],
  fields: {
    ProductID: {type: 'Edm.Int32', nullable: false},
    Details: {type: 'Edm.String'},
    Product: {type: 'ODataDemo.Product', navigation: true}
  }
} as StructuredTypeConfig<ProductDetail>;
//#endregion