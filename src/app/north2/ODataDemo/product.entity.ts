//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Category } from './category.entity';
import { Supplier } from './supplier.entity';
import { CategoryModel } from './category.model';
import { SupplierModel } from './supplier.model';
import { CategoryCollection } from './category.collection';
import { SupplierCollection } from './supplier.collection';
//#endregion

//#region ODataApiGen Type
export const ProductType = 'ODataDemo.Product';//#endregion
export interface Product {
  //#region ODataApiGen Properties
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