//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { CurrentProductListsService } from './current_product_lists.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const CurrentProductListsServiceEntitySetConfig = {
  name: 'Current_Product_Lists',
  entityType: 'NorthwindModel.Current_Product_List',
  service: CurrentProductListsService
} as EntitySetConfig;
//#endregion