import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { FeaturedProduct } from './featuredproduct.entity';
//#endregion

export const FeaturedProductConfig = {
  name: "FeaturedProduct",
  base: "ODataDemo.Product",
  annotations: [],
  fields: {
    Advertisement: {type: 'ODataDemo.Advertisement', navigation: true}
  }
} as EntityConfig<FeaturedProduct>;