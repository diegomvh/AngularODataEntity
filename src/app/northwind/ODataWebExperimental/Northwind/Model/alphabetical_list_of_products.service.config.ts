import { EntitySetConfig } from 'angular-odata';

//#region ODataApi Imports
import { AlphabeticalListOfProductsService } from './alphabetical_list_of_products.service';
//#endregion

//#region ODataApi EntitySetConfig
export const AlphabeticalListOfProductsServiceEntitySetConfig = {
  name: "Alphabetical_list_of_products",
  entityType: "NorthwindModel.Alphabetical_list_of_product",
  service: AlphabeticalListOfProductsService
} as EntitySetConfig;
//#endregion