//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ProductDetail } from './productdetail.entity';
import { ProductDetailModel } from './productdetail.model';
import { ProductDetailCollection } from './productdetail.collection';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ProductDetailEntityConfig = {
  name: "ProductDetail",
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