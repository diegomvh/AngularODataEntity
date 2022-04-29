//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ProductsService } from './products.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const ProductsServiceEntitySetConfig = {
  name: 'Products',
  entityType: 'ODataDemo.Product',
  service: ProductsService
} as EntitySetConfig;
//#endregion