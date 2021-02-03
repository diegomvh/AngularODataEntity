import { EntityContainerConfig } from 'angular-odata';

//#region ODataApi Imports
import { ProductsServiceEntitySetConfig } from './products.service.config';
import { ProductDetailsServiceEntitySetConfig } from './productdetails.service.config';
import { CategoriesServiceEntitySetConfig } from './categories.service.config';
import { SuppliersServiceEntitySetConfig } from './suppliers.service.config';
import { PersonsServiceEntitySetConfig } from './persons.service.config';
import { PersonDetailsServiceEntitySetConfig } from './persondetails.service.config';
import { AdvertisementsServiceEntitySetConfig } from './advertisements.service.config';
//#endregion

//#region ODataApi EntityContainerConfig
export const DemoServiceContainer = {
  name: "DemoService",
  annotations: [],
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