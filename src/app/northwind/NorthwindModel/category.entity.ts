import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Product } from './product.entity';
import { ProductModel } from './product.model';
import { ProductCollection } from './product.collection';
//#endregion

export interface Category {
  //#region ODataApi Properties
  categoryID: number;
  categoryName: string;
  description?: string;
  picture?: ArrayBuffer;
  products?: Product[];
  //#endregion
}