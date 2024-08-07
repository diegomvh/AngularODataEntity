﻿//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ProductDetailsService } from './product-details.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const ProductDetailsServiceEntitySetConfig = {
  name: 'ProductDetails',
  entityType: 'ODataDemo.ProductDetail',
  service: ProductDetailsService
} as EntitySetConfig;
//#endregion