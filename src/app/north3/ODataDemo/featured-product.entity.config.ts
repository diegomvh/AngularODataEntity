//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { FeaturedProduct } from './featured-product.entity';
import { FeaturedProductModel } from './featured-product.model';
import { FeaturedProductCollection } from './featured-product.collection';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const FeaturedProductEntityConfig = {
  name: 'FeaturedProduct',
  base: 'ODataDemo.Product',
  model: FeaturedProductModel,
  collection: FeaturedProductCollection,
  fields: {
    Advertisement: {type: 'ODataDemo.Advertisement', navigation: true}
  }
} as StructuredTypeConfig<FeaturedProduct>;
//#endregion