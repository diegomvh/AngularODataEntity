//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { CategoryGroupsService } from './categorygroups.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const CategoryGroupsServiceEntitySetConfig = {
  name: "CategoryGroups",
  entityType: "Cbs.OData.CategoryGroup",
  service: CategoryGroupsService
} as EntitySetConfig;
//#endregion