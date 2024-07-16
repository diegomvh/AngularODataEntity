//#region ODataApiGen ODataImports
import {
  EntityContainerConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ProductsServiceEntitySetConfig } from './products.service.config';
import { ProductDetailsServiceEntitySetConfig } from './product-details.service.config';
import { CategoriesServiceEntitySetConfig } from './categories.service.config';
import { SuppliersServiceEntitySetConfig } from './suppliers.service.config';
import { PersonsServiceEntitySetConfig } from './persons.service.config';
import { PersonDetailsServiceEntitySetConfig } from './person-details.service.config';
import { AdvertisementsServiceEntitySetConfig } from './advertisements.service.config';
//#endregion

//#region ODataApiGen EntityContainerConfig
export const DemoServiceEntityContainerConfig = {
  name: 'DemoService',
  entitySets: [
    ProductsServiceEntitySetConfig,
    ProductDetailsServiceEntitySetConfig,
    CategoriesServiceEntitySetConfig,
    SuppliersServiceEntitySetConfig,
    PersonsServiceEntitySetConfig,
    PersonDetailsServiceEntitySetConfig,
    AdvertisementsServiceEntitySetConfig
  ],
  singletons: [
    
  ]
} as EntityContainerConfig;
//#endregion