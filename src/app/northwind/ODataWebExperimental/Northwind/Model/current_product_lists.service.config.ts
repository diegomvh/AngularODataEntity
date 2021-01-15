import { EntitySetConfig } from 'angular-odata';

//#region ODataApi Imports
import { CurrentProductListsService } from './current_product_lists.service';
//#endregion

//#region ODataApi EntitySetConfig
export const CurrentProductListsConfig = {
  name: "Current_Product_Lists",
  entityType: "NorthwindModel.Current_Product_List",
  service: CurrentProductListsService,
  annotations: []
} as EntitySetConfig;
//#endregion