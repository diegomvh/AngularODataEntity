//#region AngularOData Imports
import { 
  EntitySetConfig 
} from 'angular-odata';//#endregion

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