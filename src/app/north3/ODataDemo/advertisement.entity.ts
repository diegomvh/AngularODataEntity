//#region AngularOData Imports
import { 
  Duration 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { FeaturedProduct } from './featuredproduct.entity';
import { FeaturedProductModel } from './featuredproduct.model';
import { FeaturedProductCollection } from './featuredproduct.collection';
//#endregion

export interface Advertisement {
  //#region ODataApi Properties
  ID: string;
  Name?: string;
  AirDate: any;
  FeaturedProduct?: FeaturedProduct;
  //#endregion
}