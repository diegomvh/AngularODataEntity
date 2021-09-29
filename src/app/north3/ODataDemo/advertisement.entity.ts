//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { FeaturedProduct } from './featuredproduct.entity';
import { FeaturedProductModel } from './featuredproduct.model';
import { FeaturedProductCollection } from './featuredproduct.collection';
//#endregion

export interface Advertisement {
  //#region ODataApiGen Properties
  ID: string;
  Name?: string;
  AirDate: any;
  FeaturedProduct?: FeaturedProduct;
  //#endregion
}