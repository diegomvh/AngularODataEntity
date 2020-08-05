import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ProductDetail } from './productdetail.entity';
//#endregion

export const ProductDetailConfig = {
  name: "ProductDetail",
  annotations: [],
  fields: {
    ProductID: {type: 'Edm.Int32', key: true, ref: 'ProductID', nullable: false},
    Details: {type: 'Edm.String'},
    Product: {type: 'ODataDemo.Product', navigation: true}
  }
} as EntityConfig<ProductDetail>;