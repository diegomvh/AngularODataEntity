import { EntityContainerConfig } from 'angular-odata';

//#region ODataApi Imports
import { ProductsServiceEntitySetConfig } from './products.service.config';
import { CategoriesServiceEntitySetConfig } from './categories.service.config';
import { SuppliersServiceEntitySetConfig } from './suppliers.service.config';
//#endregion

//#region ODataApi EntityContainerConfig
export const DemoServiceContainer = {
  name: "DemoService",
  entitySets: [
    ProductsServiceEntitySetConfig,
    CategoriesServiceEntitySetConfig,
    SuppliersServiceEntitySetConfig
  ]
} as EntityContainerConfig;
//#endregion