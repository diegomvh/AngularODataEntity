import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Product } from './product.entity';
import { Advertisement } from './advertisement.entity';
//#endregion

export interface FeaturedProduct extends Product {
  //#region ODataApi Properties
  Advertisement?: Advertisement;
  //#endregion
}