import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Product } from './product.entity';
//#endregion

export interface Category {
  //#region ODataApi Properties
  ID: number;
  Name?: string;
  Products?: Product[];
  //#endregion
}