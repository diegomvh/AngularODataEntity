import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { FeaturedProduct } from './featuredproduct.entity';
import { FeaturedProductModel } from './featuredproduct.model';
import { FeaturedProductCollection } from './featuredproduct.collection';
//#endregion

export const FeaturedProductConfig = {
  name: "FeaturedProduct",
  base: "ODataDemo.Product",
  model: FeaturedProductModel,
  collection: FeaturedProductCollection,
  annotations: [],
  fields: {
    Advertisement: {type: 'ODataDemo.Advertisement', navigation: true}
  }
} as StructuredTypeConfig<FeaturedProduct>;