import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { FeaturedProduct } from './featuredproduct.entity';
import { FeaturedProductModel } from './featuredproduct.model';
import { FeaturedProductCollection } from './featuredproduct.collection';
//#endregion

//#region ODataApi StrucutredTypeConfig
export const FeaturedProductEntityConfig = {
  name: "FeaturedProduct",
  base: "ODataDemo.Product",
  model: FeaturedProductModel,
  collection: FeaturedProductCollection,
  fields: {
    Advertisement: {type: 'ODataDemo.Advertisement', navigation: true}
  }
} as StructuredTypeConfig<FeaturedProduct>;
//#endregion