import { EntitySetConfig } from 'angular-odata';

//#region ODataApi Imports
import { CurrentProductListsService } from './current_product_lists.service';
//#endregion

//#region ODataApi EntitySetConfig
export const CurrentProductListsServiceEntitySetConfig = {
  name: "Current_Product_Lists",
  entityType: "NorthwindModel.Current_Product_List",
  service: CurrentProductListsService
} as EntitySetConfig;
//#endregion