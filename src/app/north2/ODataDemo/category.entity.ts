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
export const CategoryType = 'ODataDemo.Category';//#endregion
export interface Category {
  //#region ODataApiGen Properties
  ID: number;
  Name?: string;
  Products?: Product[];
  //#endregion
}