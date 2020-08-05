import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { FeaturedProduct } from './featuredproduct.entity';
//#endregion

export interface Advertisement {
  //#region ODataApi Properties
  ID: string;
  Name?: string;
  AirDate: any;
  FeaturedProduct?: FeaturedProduct;
  //#endregion
}