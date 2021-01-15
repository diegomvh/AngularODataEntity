import { EntityContainerConfig } from 'angular-odata';

//#region ODataApi Imports
import { ProductsConfig } from './products.service.config';
import { CategoriesConfig } from './categories.service.config';
import { SuppliersConfig } from './suppliers.service.config';
//#endregion

//#region ODataApi EntityContainerConfig
export const DemoServiceContainer = {
  name: "DemoService",
  annotations: [],
  entitySets: [
    ProductsConfig,
    CategoriesConfig,
    SuppliersConfig
  ]
} as EntityContainerConfig;
//#endregion