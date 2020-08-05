import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Product } from './product.entity';
//#endregion

export interface ProductDetail {
  //#region ODataApi Properties
  ProductID: number;
  Details?: string;
  Product?: Product;
  //#endregion
}