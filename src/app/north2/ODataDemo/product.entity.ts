import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Category } from './category.entity';
import { Supplier } from './supplier.entity';
//#endregion

export interface Product {
  //#region ODataApi Properties
  ID: number;
  Name?: string;
  Description?: string;
  ReleaseDate: any;
  DiscontinuedDate?: any;
  Rating: number;
  Price: number;
  Category?: Category;
  Supplier?: Supplier;
  //#endregion
}