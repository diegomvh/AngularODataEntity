//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Product } from './product.entity';
import { ProductModel } from './product.model';
import { ProductCollection } from './product.collection';
//#endregion

export interface ProductDetail {
  //#region ODataApiGen Properties
  ProductID: number;
  Details?: string;
  Product?: Product;
  //#endregion
}