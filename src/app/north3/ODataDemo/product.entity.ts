import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { ProductDetail } from './productdetail.entity';
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
  Categories?: Category[];
  Supplier?: Supplier;
  ProductDetail?: ProductDetail;
  //#endregion
}