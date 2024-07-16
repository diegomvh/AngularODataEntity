//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ProductDetail } from './product-detail.entity';
import { Category } from './category.entity';
import { Supplier } from './supplier.entity';
import { ProductDetailModel } from './product-detail.model';
import { CategoryModel } from './category.model';
import { SupplierModel } from './supplier.model';
import { ProductDetailCollection } from './product-detail.collection';
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
  Categories?: Category[];
  Supplier?: Supplier;
  ProductDetail?: ProductDetail;
  //#endregion
}