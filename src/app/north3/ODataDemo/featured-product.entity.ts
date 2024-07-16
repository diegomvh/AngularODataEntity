//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Product } from './product.entity';
import { Advertisement } from './advertisement.entity';
import { ProductModel } from './product.model';
import { AdvertisementModel } from './advertisement.model';
import { ProductCollection } from './product.collection';
import { AdvertisementCollection } from './advertisement.collection';
//#endregion

//#region ODataApiGen Type
export const FeaturedProductType = 'ODataDemo.FeaturedProduct';//#endregion
export interface FeaturedProduct extends Product {
  //#region ODataApiGen Properties
  Advertisement?: Advertisement;
  //#endregion
}