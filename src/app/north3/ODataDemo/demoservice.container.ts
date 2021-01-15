import { EntityContainerConfig } from 'angular-odata';

//#region ODataApi Imports
import { ProductsConfig } from './products.service.config';
import { ProductDetailsConfig } from './productdetails.service.config';
import { CategoriesConfig } from './categories.service.config';
import { SuppliersConfig } from './suppliers.service.config';
import { PersonsConfig } from './persons.service.config';
import { PersonDetailsConfig } from './persondetails.service.config';
import { AdvertisementsConfig } from './advertisements.service.config';
//#endregion

//#region ODataApi EntityContainerConfig
export const DemoServiceContainer = {
  name: "DemoService",
  annotations: [],
  entitySets: [
    ProductsConfig,
    ProductDetailsConfig,
    CategoriesConfig,
    SuppliersConfig,
    PersonsConfig,
    PersonDetailsConfig,
    AdvertisementsConfig
  ]
} as EntityContainerConfig;
//#endregion