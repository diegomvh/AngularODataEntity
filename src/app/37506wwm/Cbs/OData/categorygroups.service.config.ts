//#region AngularOData Imports
import { 
  EntitySetConfig 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { CategoryGroupsService } from './categorygroups.service';
//#endregion

//#region ODataApi EntitySetConfig
export const CategoryGroupsServiceEntitySetConfig = {
  name: "CategoryGroups",
  entityType: "Cbs.OData.CategoryGroup",
  service: CategoryGroupsService
} as EntitySetConfig;
//#endregion