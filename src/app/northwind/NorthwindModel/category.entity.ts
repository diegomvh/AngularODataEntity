import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Product } from './product.entity';
//#endregion

export interface Category {
  //#region ODataApi Properties
  CategoryID: number;
  CategoryName: string;
  Description?: string;
  Picture?: ArrayBuffer;
  Products?: Product;
  //#endregion
}