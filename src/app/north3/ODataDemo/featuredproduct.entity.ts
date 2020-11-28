import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Product } from './product.entity';
import { Advertisement } from './advertisement.entity';
import { ProductModel } from './product.model';
import { AdvertisementModel } from './advertisement.model';
import { ProductCollection } from './product.collection';
import { AdvertisementCollection } from './advertisement.collection';
//#endregion

export interface FeaturedProduct extends Product {
  //#region ODataApi Properties
  Advertisement?: Advertisement;
  //#endregion
}