﻿//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Product } from './product.entity';
import { ProductModel } from './product.model';
import { ProductCollection } from './product.collection';
//#endregion

//#region ODataApiGen Type
export const CategoryType = 'NorthwindModel.Category';//#endregion
export interface Category {
  //#region ODataApiGen Properties
  CategoryID: number;
  CategoryName?: string;
  Description?: string;
  Picture: ArrayBuffer;
  Products: Product[];
  //#endregion
}