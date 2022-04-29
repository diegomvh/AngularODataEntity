//#region ODataApiGen ODataImports
import {
  EntityContainerConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ProductsServiceEntitySetConfig } from './products.service.config';
import { ProductDetailsServiceEntitySetConfig } from './productdetails.service.config';
import { CategoriesServiceEntitySetConfig } from './categories.service.config';
import { SuppliersServiceEntitySetConfig } from './suppliers.service.config';
import { PersonsServiceEntitySetConfig } from './persons.service.config';
import { PersonDetailsServiceEntitySetConfig } from './persondetails.service.config';
import { AdvertisementsServiceEntitySetConfig } from './advertisements.service.config';
//#endregion

//#region ODataApiGen EntityContainerConfig
export const DemoServiceContainer = {
  name: 'DemoService',
  entitySets: [
    ProductsServiceEntitySetConfig,
    ProductDetailsServiceEntitySetConfig,
    CategoriesServiceEntitySetConfig,
    SuppliersServiceEntitySetConfig,
    PersonsServiceEntitySetConfig,
    PersonDetailsServiceEntitySetConfig,
    AdvertisementsServiceEntitySetConfig
  ]
} as EntityContainerConfig;
//#endregion