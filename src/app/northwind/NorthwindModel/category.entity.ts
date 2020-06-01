//#region ODataApi Imports
import { Product } from './product.entity';
//#endregion

export interface Category {
  //#region ODataApi Properties
  CategoryID: number;
  CategoryName: string;
  Description?: string;
  Picture?: string;
  Products?: Product[];
  //#endregion
}