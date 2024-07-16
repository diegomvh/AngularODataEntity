//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { FeaturedProduct } from './featured-product.entity';
import { FeaturedProductModel } from './featured-product.model';
import { FeaturedProductCollection } from './featured-product.collection';
//#endregion

//#region ODataApiGen Type
export const AdvertisementType = 'ODataDemo.Advertisement';//#endregion
export interface Advertisement {
  //#region ODataApiGen Properties
  ID: string;
  Name?: string;
  AirDate: any;
  FeaturedProduct?: FeaturedProduct;
  //#endregion
}