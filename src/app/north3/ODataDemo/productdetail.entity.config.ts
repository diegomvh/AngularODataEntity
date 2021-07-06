//#region AngularOData Imports
import { 
  StructuredTypeConfig 
} from 'angular-odata';//#endregion

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
  keys: [{name: 'ProductID'}],
  fields: {
    ProductID: {type: 'Edm.Int32', nullable: false},
    Details: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<ProductDetail>;
//#endregion