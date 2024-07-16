//#region ODataApiGen ODataImports
import {
  EntityContainerConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ProductsServiceEntitySetConfig } from './products.service.config';
import { CategoriesServiceEntitySetConfig } from './categories.service.config';
import { SuppliersServiceEntitySetConfig } from './suppliers.service.config';
//#endregion

//#region ODataApiGen EntityContainerConfig
export const DemoServiceEntityContainerConfig = {
  name: 'DemoService',
  entitySets: [
    ProductsServiceEntitySetConfig,
    CategoriesServiceEntitySetConfig,
    SuppliersServiceEntitySetConfig
  ],
  singletons: [
    
  ]
} as EntityContainerConfig;
//#endregion